const moongoose = require("mongoose");
  
const connectDB = async () => {
    try {
        const conn = await moongoose.connect(process.env.MONGO_URI,);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;