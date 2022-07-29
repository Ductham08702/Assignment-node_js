import express from "express"
import { add, edit, list, read, remove } from "../controllers/admin/product"
const router = express.Router()

router.get("/product", list)
router.get("/product/:id", read)
router.post("/product", add)
router.delete("/product/:id", remove)
router.patch("/product/:id", edit)

export default router