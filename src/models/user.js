import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: Number,
        minlength: 5
    },
    name: {
        type: String
    }
})
const User = mongoose.model("user", userSchema)
export default User