import express from "express";
import cors from "cors";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes";
// Create Express server
export const app = express();
app.use(cors());

// Express configuration
// app.set("port", process.env.PORT || 9000);
// app.use(logger("dev"));

app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
