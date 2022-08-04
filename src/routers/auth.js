import express from "express"
import signup from "../apis/user/signup";
import signin from "../apis/user/signin";


const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)



export default router