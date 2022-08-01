import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import "dotenv/config";
import routerProduct from "./routers/product";
import routerCategories from "../src/routers/category"



const app = express();
const port = 8001;

app.use(cors());
app.use(express.json())
app.use("/api", routerProduct)
app.use("/api", routerCategories)



// Ket noi database
mongoose.connect("mongodb://localhost:27017/assignment_node", () => {
    console.log("successfully!");
});

app.listen(port, () => {
    console.log("Kết nối thành công, cổng " + port);
});