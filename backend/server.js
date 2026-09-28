import express from "express"
import 'dotenv/config';
import { db } from "./src/db/db.js";

const app = express();

const port = process.env.PORT;

app.get((req, res)=>{
    res.send({
        message: "starting"
    })
})



app.listen(port, async () => {
    await db;
    console.log(`Server is running on port ${port}`);
});