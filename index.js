process.loadEnvFile();
import express from "express";
import dbConnection from "./database/connection.js";
import { urlRouter } from "./routes/urlRouter.js";

await dbConnection();

const app = express();

app.use("/url", urlRouter);
app.listen(process.env.PORT, () =>
  console.log("app started on http://localhost:" + process.env.PORT),
);
