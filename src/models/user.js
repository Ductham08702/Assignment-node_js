import mongoose from "mongoose";
import { createHmac } from "crypto";

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
    },
    role: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });




// Export model user
const User = mongoose.model("user", userSchema)
export default User