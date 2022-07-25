import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import "dotenv/config";



const app = express();


app.use(cors());
app.use(express.json())



// Ket noi database
mongoose.connect("mongodb://localhost:27017/assignment_node", () => {
    console.log("successfully!");
});

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});