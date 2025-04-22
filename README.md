# YelpCamp

A full-stack campground review web application built as part of a hands-on learning project. Users can register, log in, create campgrounds, and leave reviews with full CRUD capabilities.

## 🌐 Live Demo

https://yelpcamp-testing-c7ja.onrender.com/

## 🚀 Features

- User registration and login (authentication using Passport.js)
- Create, read, update, and delete (CRUD) campgrounds
- Add and delete reviews for each campground
- RESTful routing structure
- Flash messages for user feedback
- Error handling and form validation
- Responsive frontend design with Bootstrap

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS Templating Engine
- Passport.js (Authentication)
- Bootstrap 5

## 🧪 Testing

Basic functional testing and error handling implemented manually. Further improvements with automated tests planned.

## 📂 Folder Structure

yelpCamp_testing/
├── app.js # Main application entry point
├── models/ # Mongoose schemas (e.g., campground, review)
├── routes/ # Express routes for campgrounds and reviews
├── views/ # EJS templates for rendering UI
│ ├── partials/ # Header/footer components
│ └── campgrounds/ # Views for CRUD operations
├── public/ # Static assets like CSS and images
├── package.json # Project metadata and dependencies
└── README.md # Project overview and documentation

📄 License
This project is for educational purposes only.
