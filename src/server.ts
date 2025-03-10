import express, { NextFunction, Request, Response } from "express";
import pageRouter from "./routes/page.routes";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();

// Create Express server
const app = express();
const port = process.env.PORT || 3000;

// View engine setup
// __dirname : The name of the directory that the currently executing script resides in. "dist/server.js"
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", pageRouter);

// Fallback route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("404");
});

// serve
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
