import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://awokedejenie21:mongopassword@cluster0.zfmy8.mongodb.net/portfolio"
            // "mongodb://localhost:27017/portfolio");
        );
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to DB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
};

export default connectMongoDB;