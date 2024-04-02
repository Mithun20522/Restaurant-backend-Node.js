import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    items:{
        type:Array,
        required:true
    },
    totalcost:{
        type:Number,
        required:true
    },
    restaurent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant'
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema);
export default Order;