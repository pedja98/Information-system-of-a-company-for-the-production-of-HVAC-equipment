const {
    Material,
    Stock,
    Need,
    User
} = require('../models/index')

const getMaterials = async (req, res) => {
    try {
        const materials = await Material.findAll(
            {
                attributes: ['id', 'name', 'itemNumber', 'supplierCode', 'supplierItemNumber', 'unit'],
                include: [{
                    model: Stock,
                    as: 'stock',
                    attributes: ['count', 'capacity'],
                    required: true
                }]
            }
        )
        res.json(materials)
    } catch (err) {
        res.json(err)
    }
}

const createMaterial = async (req, res) => {
    try {
        Material.create({
            name: req.body.name,
            itemNumber: req.body.itemNumber,
            supplierCode: req.body.supplierCode,
            supplierItemNumber: req.body.supplierItemNumber,
            "stock": {}
        }, {
            unit: req.body.unit,
            count: req.body.count,
            capacity: req.body.capacity,
        })

        res.json({
            success: true,
        })
    } catch (err) {
        res.json(err)
    }
}

const updateMaterialStock = async (req, res) => {
    try {
        const result = await Stock.update(
            {
                count: req.body.count
            }, {
            where: { id: req.params.id },
        }
        )

        const user = await User.findOne({
            attributes: ['id'],
            where: {
                email: req.email,
            }
        })

        Need.create({
            stockeeperId: user.id,
            status: 'SENT',
            count:req.body.value,
            materialId: req.params.id
        })

        res.json({
            success: result[0]
        })
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    getMaterials,
    createMaterial,
    updateMaterialStock
}