import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectMongoDB = async () => {
    try {
        // Use the environment variable for MongoDB URL
        await mongoose.connect(process.env.MONGO_URL);
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
