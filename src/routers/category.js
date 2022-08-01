import express from "express"
import { add_category } from "../apis/categories/add_categories"

const router = express.Router()

router.post("/category", add_category)


export default router