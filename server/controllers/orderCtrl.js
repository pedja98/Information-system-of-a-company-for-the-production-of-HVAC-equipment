const {
    User,
    Order,
    Ordered_Device
} = require('../models/index')

const createOrder = async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ['id'],
            where: {
                email: req.email,
            }
        })
        Order.create({
            userId: user.id,
            dateOfRealisation: null,
            companyName: req.body.companyName,
            companyAddress: req.body.companyAddress,
            companyCity: req.body.companyCity,
            companyCountry: req.body.companyCountry,
            "device": {
                device: req.body.device,
                status: 'ORDER_CREATED',
                model: req.body.model,
                width: req.body.width,
                height: req.body.height,
                length: req.body.length,
                fans: req.body.fans,
                filters: req.body.filters,
                coolers: req.body.coolers,
                heaters: req.body.heaters,
                moisturizer: req.body.moisturizer,
                recuperator: req.body.recuperator,
                mufflers: req.body.mufflers
            }
        }, {
            include: ['device']
        })

        res.json({
            success: true,
        })
    } catch (err) {
        res.json({
            "err": err
        })
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            order: [
                ['id', 'DESC'],
            ],
            attributes: ['id', 'companyName', 'createdAt'],
            include: [{
                model: Ordered_Device,
                as: 'device',
                attributes: ['device', 'status'],
                required: true
            }, {
                model: User,
                as: 'user',
                attributes: ['firstName', 'lastName'],
            }
            ],
        })
        res.json(orders)
    } catch (err) {
        res.json({
            "err": err
        })
    }
}

const getOrder = async (req, res) => {
    try {
        const orders = await Order.findByPk(req.params.id, {
            attributes: [
                'dateOfRealisation',
                'companyName',
                'companyCity',
                'companyCountry',
                'companyAddress',
                'createdAt'
            ],
            include: [{
                model: Ordered_Device,
                as: 'device',
                attributes: [
                    'coolers',
                    'heaters',
                    'device',
                    'fans',
                    'filters',
                    'height',
                    'length',
                    'model',
                    'moisturizer',
                    'mufflers',
                    'recuperator',
                    'status',
                    'width'
                ],
                required: true
            }, {
                model: User,
                as: 'user',
                attributes: ['firstName', 'lastName', 'email'],
            }
            ],
            where: {
                type: "work-order"
            }
        })
        res.json(orders)

    } catch (err) {
        res.json({
            "err": err
        })
    }
}

const changeStatus = async (req, res) => {
    try {
        if(req.body.status === 'END_OF_PRODUCTION') {
            await Order.update({
                dateOfRealisation: Date.now(),
            }, {
                where: {
                    id: req.params.id,
                }
            })
        }
        const ordered_device = await Ordered_Device.update({
            status: req.body.status
        }, {
            where: {
                id: req.params.id,
            }
        })
        
        res.json({
            success: ordered_device[0],
        })

    } catch (err) {
        res.json({
            "err": err
        })
    }
}

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    changeStatus
}