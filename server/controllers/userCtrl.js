const {
    User,
    User_Activity
} = require('../models/index')
const {
    Op
} = require('sequelize')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');
const passwordGenerator = require('secure-random-password');
const nodemailer = require('nodemailer');

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ['id', 'email', 'password', 'type'],
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            res.json({
                msg: 'mail'
            })
            return
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.json({
                msg: 'password'
            })
            return;
        }

        await User_Activity.create({
            logedIn: Date.now(),
            logedOut: null,
            userId: user.id
        })

        const token = jwt.sign(user.email, process.env.ACCESS_TOKEN_SECRET)
        res.json({
            "token": token,
            "type": user.type
        })
    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

const getById = (req, res) => {
    User.findByPk(req.params.id, {
        include: ['activities'],
    })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.json({
                "err": err
            })
        })

}

const updateById = async (req, res) => {
    try {
        const emailOwner = await User.findOne({
            where: {
                email: req.body.email,
                id: {
                    [Op.ne]: req.params.id
                }
            }
        })
        
        if(emailOwner) {
           res.json({faild: 'mail'})
           return
        }
        
        User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth
        }, {
            where: {
                id: req.params.id,
            }
        })
        res.json({
            success: true,
        })
    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

const createUser = async (req, res) => {
    const password = passwordGenerator.randomPassword({ length: 10, characters: [passwordGenerator.lower, passwordGenerator.upper, passwordGenerator.digits, passwordGenerator.symbols] })
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT));
    const [row, created] = await User.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            type: req.body.type,
            password: hashPassword,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            pic: null,
        }
    })

    if (created) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        var mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: 'Vasa Lozinka',
            text: `Vasa lozinka za pristup je ${password}`
        };
        await transporter.sendMail(mailOptions)
    }

    res.json({
        created: created
    })

}

const getUsers = (req, res) => {
    User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'pic'],
        where: {
            email: {
                [Op.ne]: req.email
            }
        }
    })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.json({
                "err": err
            })
        })

}

const deleteById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        user.destroy()

        const result = await User.findAll({
            attributes: ['id', 'firstName', 'lastName', 'pic'],
            where: {
                email: {
                    [Op.ne]: req.email
                }
            }
        })

        res.json({
            success: true,
            users: result
        })

    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

const getUser = (req, res) => {
    User.findOne({
        attributes: ['firstName', 'lastName', 'email', 'dateOfBirth', 'pic'],
        where: {
            email: req.email
        }
    })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.json({
                "err": err
            })
        })

}

const logout = async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ['id'],
            where: {
                email: req.email
            }
        })
        await User_Activity.update({
            logedOut: Date.now()
        }, {
            where: {
                userId: user.id,
                logedOut: null
            }
        })
        res.json({
            success: true
        })
    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

const changePassword = async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ['id', 'password'],
            where: {
                email: req.email,
            }
        })
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.json({
                msg: 'old-password'
            })
            return
        }
        if (req.body.password == req.body.new_password) {
            res.json({
                msg: 'same-password'
            })
            return
        }
        const hash = await bcrypt.hash(req.body.new_password, parseInt(process.env.SALT))
        User.update({
            password: hash
        }, {
            where: {
                id: user.id,
            }
        })

        res.json({
            success: true,
        })

    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

const updateMyProfile = async (req, res) => {
    try {
        const user = await User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
        }, {
            where: {
                email: req.email
            }
        })
        res.json({
            success: user[0],
        })
    } catch (err) {
        res.json({ err: err.message })
    }
}

const changePicture = async (req, res) => {
    try {
        const userData = await User.findOne({
            attributes: ['pic'],
            where: {
                email: req.email
            }
        })
        if (userData.pic) {
            let position = userData.pic.lastIndexOf('/')
            let file = userData.pic.slice(position + 1)
            await fs.unlink(path.join('images', file));
        }
        let filename = 'http://localhost:3000/images/' + req.file.filename
        const user = await User.update({
            pic: filename,
        }, {
            where: {
                email: req.email
            }
        })
        res.json({
            success: user[0],
        })
    } catch (err) {
        res.json({
            err: err.message
        })
    }

}

const resetPassword = async (req, res) => {
    try {
        const password = passwordGenerator.randomPassword({
            length: 10, characters: [
                passwordGenerator.lower,
                passwordGenerator.upper,
                passwordGenerator.digits,
                passwordGenerator.symbols]
        })
        const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

        User.update({
            password: hashPassword
        }, {
            where: {
                id: req.body.id,
            }
        })

        const user = await User.findByPk(req.body.id)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        var mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Resetovana lozinka',
            text: `Vaša nova lozinka za pristup je ${password}`
        };
        await transporter.sendMail(mailOptions)

        res.json({
            success: true,
        })

    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

const getUserInfoForEdit = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        res.json(user)
    } catch (err) {
        res.json({
            err: err.message
        })
    }
}

module.exports = {
    login,
    getById,
    updateById,
    createUser,
    getUsers,
    deleteById,
    getUser,
    logout,
    changePassword,
    updateMyProfile,
    changePicture,
    resetPassword,
    getUserInfoForEdit
}