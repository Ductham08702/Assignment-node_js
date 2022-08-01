import Product from "../../models/products";

export const remove = async(req, res) => {
    try {
        const product = await new Product.findByIdAndDelete({ _id: req.params.id }).exe()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy sản phẩm sản phẩm"
        })

    }
}