import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
        default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    },
    isVendor:{
        type:Boolean,
        default:false
    },
    address:{
        type:Array,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },

},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;