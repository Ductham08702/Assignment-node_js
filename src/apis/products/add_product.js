import Product from "../../models/products";




export const add = async(req, res) => {
    try {
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không thể thêm sản phẩm"
        })

    }
}