import mongoose from "mongoose";

const categoryShema = mongoose.Schema({
    name: {
        type: String
    }
});

export default mongoose.model('Category', categoryShema)