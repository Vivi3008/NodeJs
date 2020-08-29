const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query

        const products = await Product.paginate({}, { page, limit:10 })

        return res.json(products)
    },

    async create(req,res){
        const newProd = await Product.create(req.body)

        return res.json(newProd)
    }, 

    async show(req,res){
        const products = await Product.findById(req.params.id)

        return res.json(products)
    },

    async update(req,res){
        //procura o produto pelo id e atualiza seus dados que vierem do corpo da requisição
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(products)
    },
    
    async destroy(req, res){
        await Product.findByIdAndDelete(req.params.id)

        return res.send()
    }
}