const {
    User,
    User_Activity
} = require('../models/index')
const {
    Op
} = require('sequelize')


const login = (req, res) => {
    User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then((result) => {
            if (result) {

                User_Activity.create({
                        logedIn: Date.now(),
                        logedOut: null,
                        userId: result.id
                    })
                    .then(() => {
                        res.status(200).json(result)
                    })
                    .catch(err => {
                        res.status(err.status).json({
                            "err": err
                        })
                    })
            } else {
                res.status(404).json(result)
            }
        })
        .catch(err => {
            res.status(err.status).json({
                "err": err
            })
        })
}

const getById = (req, res) => {
    User.findByPk(req.params.id, {
            include: ['activities'],
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(err.status).json({
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
            }
        })
        .then((result) => {
            let [user, created] = result
            res.json({
                created
            })
        })
        .catch(err => {
            res.status(err.status).json({
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
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(err.status).json({
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
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(err.status).json({
                "err": err
            })
        })
}

module.exports = {
    login,
    getById,
    updateById,
    createUser,
    getUsers,
    deleteById
}