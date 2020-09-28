import mongoose from 'mongoose';

export const connectToDB = async () => {
    try {
        const connStr: string = process.env.MONGODB as string;
        
        await mongoose.connect(connStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('connected to db')
    } 
    
    catch(error) {
        console.log(error);
        process.exit(1); //stops the app
    }
}