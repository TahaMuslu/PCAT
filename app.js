const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const Photo = require("./models/Photo");
const pageControllers = require("./controllers/pageControllers");
const photoControllers = require("./controllers/photoControllers");

const app = express();

//CONNECT DB
mongoose.connect(
    "mongodb+srv://tahamuslu:ibeenamelesi1221@cluster0.mdgbd28.mongodb.net/?retryWrites=true&w=majority"
);

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//ROUTES
app.get("/", photoControllers.getAllPhotos);
app.get("/photos/:id", photoControllers.getPhoto);
app.post("/photos", photoControllers.createPhoto);
app.put("/photos/:id", photoControllers.updatePhoto);
app.delete("/photos/:id", photoControllers.deletePhoto);

app.get("/about", pageControllers.getAboutPage);
app.get("/add_photo", pageControllers.getAddPage);
app.get("/photos/edit/:id", pageControllers.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});