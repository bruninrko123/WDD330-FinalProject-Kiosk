require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const lockerRoutes = require('./routes/lockerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch (err => console.error("mongoDB erorr", err));


app.use('/api/lockers', lockerRoutes);
app.listen(3000, () => console.log('server running on port 3000'));