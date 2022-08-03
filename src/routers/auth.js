import express from "express"
import signup from "../apis/user/signup";


const router = express.Router()

router.post("/signup", signup)



export default router