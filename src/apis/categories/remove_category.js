import Category from "../../models/categories";

export const remove_category = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOneAndDelete({ _id: id }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "khong xoa duoc danh muc"
        })
    }
}

