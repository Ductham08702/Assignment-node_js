import Product from "../../models/products";

export const list = async(req, res) => {
    const product = await Product.find()
    res.json(product)
}