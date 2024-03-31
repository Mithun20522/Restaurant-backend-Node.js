import mongoose from "mongoose";

const connectMongoDB = (MONGODB_URI) => {
    mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'.white.bgMagenta))
    .catch((error) => console.log(error))
}

export default connectMongoDB;