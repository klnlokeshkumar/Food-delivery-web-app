import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://cluster0fooddelivery:cluster0fooddelivery@cluster0.fxf47.mongodb.net/food-delivery").then(() => { console.log("DB connected ...") })
}
