import Product from "../../models/products";

export const remove = async(req, res) => {
    try {
        const product = await Product.findByIdAndRemove({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm sản phẩm"
        })

    }
}