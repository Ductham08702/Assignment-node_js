import Product from "../../models/products";

export const list = async(req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(400).json()
        error = "Khong tim thay"
    }
}

export const read = async(req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id })
        res.json(product)
    } catch (error) {
        res.status(400).json()
        error = "Khong tim thay"

    }
}

export const add = async(req, res) => {
    try {
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json()
        error = "Khong tim thay"
    }
}

export const remove = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json()
        error = "Không tìm thấy sản phẩm"
    }
}

export const edit = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.json(product)
    } catch (error) {
        res.status(400).json()
        error = "Không tìm thấy sản phẩm"
    }
}