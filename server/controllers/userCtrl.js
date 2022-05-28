const {
    User,
    User_Activity
} = require('../models/index')
const {
    Op
} = require('sequelize')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            res.json({
                msg: 'mail'
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.json({
                msg: 'password'
            })
        }

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

const updateById = (req, res) => {
    res.json("update")
}

const createUser = (req, res) => {
    User.findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                type: req.body.type,
                password: req.body.password,
                email: req.body.email,
                date_of_birth: req.body.date_of_birth,
                pic: null,
            }
        })
        .then((result) => {
            let [user, created] = result
            res.json({
                created
            })
        })
        .catch(err => {
            res.json({
                "err": err
            })
        })
}

const getUsers = (req, res) => {
    User.findAll({
            where: {
                type: {
                    [Op.ne]: 'admin'
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

const deleteById = (req, res) => {
    User.destroy({
            where: {
                id: req.params.id
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

const getUser = (req, res) => {
    User.findOne({
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

module.exports = {
    login,
    getById,
    updateById,
    createUser,
    getUsers,
    deleteById,
    getUser,
    logout
}