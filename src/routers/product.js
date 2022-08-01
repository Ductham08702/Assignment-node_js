import express from "express"
import { add } from "../apis/products/add_product"
import { remove } from "../apis/products/delete_product"
import { read } from "../apis/products/detail_product"
import { list } from "../apis/products/list_product"
import { edit } from "../apis/products/update_product"
const router = express.Router()


router.get("/product", list)
router.get("/product/:id", read)
router.post("/product", add)
router.delete("/product/:id", remove)
router.patch("/product/:id", edit)

export default router