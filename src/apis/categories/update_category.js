import Category from "../../models/categories";

export const update_category = async(req, res) => {
    try {
        const category = await Category.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "khong update duoc san pham",
        });
    }
}