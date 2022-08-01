import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
    image: {
        type: String
    },
    price_sale: {
        type: Number
    },
    category_id: {
        type: mongoose.ObjectId,
        ref: "category"
    }
})
const Product = mongoose.model("product", productSchema)
export default Product