import Category from "../../models/categories";
export const detail_category = async(req, res) => {
    const filter = { _id: req.params.id }
    const populate = req.query["_expand"]
    try {
        const category = await Category.findOne(filter).select("-__v").populate(populate).exec()
        console.log("category", category)
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "khong tim thay san pham",
            error,
        });
    }
}