const {
    Need,
    Material,
    User
} = require('../models/index')

const getNeeds = async (req, res) => {
    try {
        const needs = await Need.findAll({
            attributes: ['id', 'count', 'status', 'createdAt', 'updatedAt'],
            include: [{
                model: Material,
                as: 'material',
                required: true,
                attributes: ['name', 'unit', 'itemNumber']
            },
            {
                model: User,
                as: 'stockkeeper',
                attributes: ['firstName', 'lastName']
            },
            {
                model: User,
                as: 'worker',
                attributes: ['firstName', 'lastName']
            }
            ],
        })
        res.json(needs)
    } catch (err) {
        res.json({
            "err": err
        })
    }
}

const receiveMaterials = async (req, res) => {
    try {
        const need = Need.update({
            "status": "RECEIVE"
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            success: need[0]
        })
    } catch (err) {
        res.json({
            "err": err
        })
    }
}

module.exports = {
    getNeeds,
    receiveMaterials
}

