const express = require("express");
const router = express.Router({ mergeParams: true });

const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../schemas.js");
const catchAsync = require("../utils/catchAsync");
const Campground = require("../models/campground");
const Review = require("../models/review");

//after creating app.post(router.post) for review, we do below
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.post(
  "/",
  validateReview,
  catchAsync(async (req, res) => {
    //res.send("YES!");
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review); //as we have 'named' it as review[body] in show page
    //reviews is refering property reviews in schema of campground.js
    campground.reviews.push(
      review
    ); /*NOTE: WE wont have access to .id from campground and hence when we put this
    to reviews router from app.js, we get an error while we leave a review.
    Routers get seperate params.
    SO we set {mergeParams: true} in express.Router above */
    /*NOTE: WE DON'T HAVE TO SET mergeParams in campgrounds.js because we don't put the /:id also in the app.use
    of app.js */
    await review.save();
    await campground.save();
    req.flash("success", "Created new review");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  "/:reviewId",
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    //pull from the reviews array from where we have reviewId
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted review");
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
