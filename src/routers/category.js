import express from "express"
import { add_category } from "../apis/categories/add_categories"
import { list_category } from "../apis/categories/list_category"
import { remove_category } from "../apis/categories/remove_category"
import { update_category } from "../apis/categories/update_category"

const router = express.Router()

router.post("/category", add_category)
router.delete("/category/:id", remove_category)
router.get("/category/", list_category)
router.patch("/category/:id", update_category)


export default router