import { app } from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is listening on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => console.log("MongoDB connection Failure !!!", err));

/*
import express from 'express'
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" ,(error) => {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port http://localhost:${process.env.PORT}`)
        }) 
    } 
    catch (error) {
        console.log('ERROR: ', error)
        throw err
    }
}) ()
*/
