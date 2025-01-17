import mongoose from "mongoose";

const ProductSchema = mongoose(
    {
        name:{
            type:String,
            required:[true, " Please enter a name"],
        },
        
        quantity:{
            type: Number,
            required: true,
            default:0
        },

        price:{
            type: Number,
            required: true,
            default:0
        },

        image: {
            type: String,
            required: false
        }, 
    },
    {
        Timestamp: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;