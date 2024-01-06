import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app = express();

// For Handling Requests
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

//app.use(express.urlencoded()) ---------- ALSO Acceptable
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cookieParser());

export { app };
