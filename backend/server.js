const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const cors = require('cors');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());



app.use('/api/users', userRoutes)



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server is Connected to ${PORT}`));

