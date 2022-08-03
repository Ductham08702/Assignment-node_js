import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import "dotenv/config";
import routerProducts from "../src/routers/product"
import routerCategory from "../src/routers/category"
import roterAuth from "../src/routers/auth"



const app = express();

app.use(cors());
app.use(express.json())


// Create rouer api
app.use("/api", routerProducts) //products
app.use("/api", routerCategory) //categories
app.use("/api", roterAuth)



// Ket noi database
mongoose.connect("mongodb://localhost:27017/assignment_node", () => {
    console.log("successfully!");
});

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});