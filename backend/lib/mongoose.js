import mongoose from "mongoose";

export function mongooseConnect(){
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }

    let uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('Missing MONGODB_URI in environment (.env.local)');
    }
    // Some environments accidentally duplicate the scheme (e.g. mongodb+srv:mongodb+srv://...)
    // Normalize it to a valid MongoDB connection string.
    if (uri.startsWith('mongodb+srv:mongodb+srv://')) {
        uri = uri.replace('mongodb+srv:mongodb+srv://', 'mongodb+srv://');
    }

    if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
        throw new Error('Invalid MONGODB_URI scheme. Expected "mongodb://" or "mongodb+srv://"');
    }

    return mongoose.connect(uri);
}
