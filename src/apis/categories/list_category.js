import Category from "../../models/categories";

export const list_category = async(req, res) => {
    try {
        const category = await Category.find().exec()
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}