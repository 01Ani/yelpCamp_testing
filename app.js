const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const ejsMate = require("ejs-mate");
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const Campground = require("./models/campground");

app.engine("ejs", ejsMate); //we have to tell express to use this particular one, so we set it, so that it doesn't use the default one
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp")
  .then(() => {
    console.log("MONGO CONNECTED!");
  })
  .catch((err) => {
    console.log("THERE WAS AN ERROR ON MONGO", err);
  });

// app.get("/makecampground", async (req, res) => {
//   const camp = new Campground({
//     title: "My Backyard",
//     description: "cheap camping",
//   });
//   await camp.save();
//   res.send(camp);
// });

app.get("/", (req, res) => {
  res.render("home");
});

app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);

//for getting the id of the particular li and redirecting to that page
//for creating new campground
app.post(
  "/campgrounds",
  catchAsync(async (req, res, next) => {
    if (!req.body.campground) throw new ExpressError("Invalid Campground", 400); //we do this so that if a person tries to create a campground using just html or postman...
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

//remember that we cannot put /new below /:id because if done so, /new will be considered as if given to /:id
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/show", { campground });
  })
);

app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
  })
);

app.put(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    }); //spread operator instead of keeping it in one line it spreads into different ones like -
    //{
    //title:
    //location:
    //}
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

app.delete(
  `/campgrounds/:id`,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  //const { statusCode = 500, message = "Something Went Wrong" } = err; //we rempve the message from the destructuring
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh no something went wrong"; //if the error something not defined at all/built in
  //res.status(statusCode).send(message);
  res.status(statusCode).render("error", { err }); //so message is basically in the render part
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
