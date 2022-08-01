import Product from "../../models/products";

export const edit = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm"
        })

    }
}