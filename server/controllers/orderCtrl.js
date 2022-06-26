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
            type: req.body.type,
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

const getWorkOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
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

const getWorkOrder = async (req, res) => {
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

module.exports = {
    createOrder,
    getWorkOrders,
    getWorkOrder
}