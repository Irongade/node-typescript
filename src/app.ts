//

// importing like this didnt give us type support cause of its commonjs require concept
// const express = require("express");

import express, {Request, Response, NextFunction} from "express"
import { json } from "body-parser";

import todoRoutes from "./routes/todos"

const app = express();

app.use(json());

app.use("/todos", todoRoutes)

//error handling

app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
    res.status(500).json({
        message: err.message
    })
}) 

app.listen(3000);