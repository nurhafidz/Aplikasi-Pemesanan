const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const flash = require("req-flash");

const config = require("./config");
const routes = require("./routes/index.route");
const db = require("./database");
const loginRoutes = require("./routes/router-login");
const registerRoutes = require("./routes/router-register");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "t@1k0ch3ng",
        name: "secretName",
        cookie: {
            sameSite: true,
            maxAge: 60000,
        },
    })
);
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/login", loginRoutes);
app.use("/register", registerRoutes);



db.authenticate()
    .then(() =>
        console.log("[DB] Connection has been established successfully.")
    )
    .catch((error) =>
        console.error("[DB] Unable to connect to the database:", error)
    );

db.sync({
    alter: false,
})
    .then(() => console.log("[DB] Database synced successfully."))
    .catch((error) => console.error("[DB] Error:", error));

app.use("/", routes);

app.listen(config.port, () => {
    console.log("Server is running on port " + config.port);
    console.log("Visit http://localhost:" + config.port + "/");
});
