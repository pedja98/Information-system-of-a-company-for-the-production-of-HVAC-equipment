const {
    User,
    Order,
    Ordered_Device
} = require('../models/index')

const createOrder = async (req, res, next) => {
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
            companyEmail: req.body.companyEmail,
            companyAddress: req.body.companyAddress,
            companyCity: req.body.companyCity,
            companyPhone: req.body.companyPhone,
            companyCountry: req.body.companyCountry,
            "device": {
                device: req.body.device,
                status: 'CREATED',
                model: req.body.model,
                width: req.body.width,
                height: req.body.height,
                length: req.body.length,
                fans: req.body.fans,
                filters: req.body.filters,
                coolerHeater: req.body.coolerHeater,
                moisturizer: req.body.moisturizer,
            }
        }, {
            include: ['device']
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createOrder
}