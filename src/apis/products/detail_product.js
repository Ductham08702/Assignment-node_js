import Product from "../../models/products";

export const read = async(req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id })
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm"
        })

    }
}