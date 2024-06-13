import express from "express";
import session from "express-session";  
import mongoose from "mongoose";
import "dotenv/config";
import Lab5 from "./Lab5/index.js";
// import CourseRoutes from "./Kanbas/Courses/routes.js";
// import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentsRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
import UserRoutes from "./Users/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import CourseRoutes from "./Courses/routes.js";
import "dotenv/config";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json()); // do all your work after this line
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentsRoutes(app);
Lab5(app);
app.listen(4000);