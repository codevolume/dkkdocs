import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors"

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://192.168.10.94:5173", credentials: true}));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse cookies

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT);
});
