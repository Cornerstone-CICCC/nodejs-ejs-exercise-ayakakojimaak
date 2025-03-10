"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
// Create Express server
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// View engine setup
// __dirname : The name of the directory that the currently executing script resides in. "dist/server.js"
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
// Middlewares
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Routes
app.use("/", page_routes_1.default);
// Fallback route
app.use((req, res, next) => {
    res.status(404).render("404");
});
// serve
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
