import express from 'express';
import routes from './routes';
import mongoose from 'mongoose'
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(`${process.env.MONGO_URI}`)
.then(() => {
    console.log(`Connected to MongoDB at ${process.env.MONGO_URI}`);
})
.catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

app.use('/api',routes);

app.listen(process.env.PORT,() => {
    console.log(`Auth service is running on port ${process.env.PORT}`);
});