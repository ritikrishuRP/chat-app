import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";



const app = express();

const PORT = ENV.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);




app.listen(PORT,()=> {
    console.log(`Server is running on ${3000}`)
    connectDB();
});



//Rate limiting is way to control how often someone can do something
//on a website or app like how many times they can refresh a page, make a request to an API, or try to log in.

//protect the server from getting overwhelmed 
//status code 429 means too many requests, so the server is saying "Hey, slow down! You're making too many requests in a short amount of time. Please wait a bit before trying again."