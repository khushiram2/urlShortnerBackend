process.loadEnvFile();
import express from "express";
import dbConnection from "./database/connection.js";
import { urlRouter } from "./routes/urlRouter.js";
import { redirectToUrl } from "./controllers/urlControllers.js";
await dbConnection();

const app = express();
app.use(express.json())
app.use("/url", urlRouter);
app.get("/:shortId",redirectToUrl)
app.listen(process.env.PORT, () =>
  console.log("app started on http://localhost:" + process.env.PORT),
);
