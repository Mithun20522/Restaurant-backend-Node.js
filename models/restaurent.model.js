import mongoose from "mongoose";

const restaurentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    logoUrl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9TcBv2OrO6ssBXw0Zy1sI7xtPpE-yg3I-8ExD1s9pnJu-zb7fBl7ryuWCk-aQO9qZNs&usqp=CAU"
    },
    time:{
        type:String
    },
    foods:{
        type:Array
    },
    isOpen:{
        type:Boolean,
        default:true
    },
    isPickupAvailable:{
        type:Boolean,
        default:true
    },
    isDeliveryAvailable:{
        type:Boolean,
        default:true
    },
    rating:{
        type:Number,
        default:1,
        min:1,
        max:5
    },
    ratingCount:{
        type:String
    },
    restraurentCode:{
        type:String
    },
    restaurentAddress:{
        type:Array,
        required:true
    },
    restaurentPhone:{
        type:String,
        required:true
    },
    restaurentEmail:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});

const Restaurant = mongoose.model('Restaurant', restaurentSchema);

export default Restaurant;