// Thêm mới danh mục
import Category from "../../models/categories"
export const add_category = async(req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: 'khong them duoc danh muc'
        })
    }
}