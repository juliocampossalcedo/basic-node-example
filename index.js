import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";

const app = express ();
app.use(express.json());

dotenv.config();

conectarDB();

app.use('/api/book', bookRoutes); 
app.use('/api/author', authorRoutes); 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

