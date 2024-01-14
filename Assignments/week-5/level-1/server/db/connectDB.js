import mongoose from "mongoose";

const connectDB = async () => {
    // await mongoose
    //     .connect(process.env.MONGO_URI)
    //     .then(() => {
    //         console.log(`MongoDB connected Successfully 🥳`);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        if (connection) {
            console.log(`MongoDB connected Successfully 🥳 ${connection.host}::${connection.port}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;