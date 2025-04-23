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

<pre> ```yelpCamp_testing/
├── config/ # Configuration files
│ └── middleware.js # Custom middleware (e.g., for authentication checks)
│
├── controllers/ # Controller logic for routes
│ ├── campgroundController.js # Campground-related routes logic
│ ├── reviewController.js # Review-related routes logic
│ └── authController.js # Authentication logic (login, logout, register)
│
├── models/ # Mongoose models for MongoDB
│ ├── campground.js # Campground schema (with location, images, etc.)
│ ├── review.js # Review schema (for campground reviews)
│ └── user.js # User schema (authentication and profile)
│
├── routes/ # Route definitions for handling endpoints
│ ├── campgroundRoutes.js # Routes for campground-related requests
│ ├── reviewRoutes.js # Routes for handling reviews
│ └── authRoutes.js # Routes for user authentication (login/register)
│
├── seeds/ # Seeding scripts for initial data
│ ├── index.js # Main seeding file to populate data
│ └── seedHelpers.js # Helpers for creating test data
│
├── utils/ # Utility files
│ ├── catchAsync.js # Catches async errors
│ └── ExpressError.js # Utility file catching express errors
│
├── views/ # Views for rendering HTML with EJS
│ ├── layouts/ # Layout files (header, footer, etc.)
│ ├── campgrounds/ # Campground-related views (index, details, create)
│ ├── reviews/ # Review-related views (for creating, editing, listing)
│ └── auth/ # Views for authentication (login, register, logout)
│
├── public/ # Static assets (CSS, images, client-side JS)
│ ├── css/ # Stylesheets (e.g., Bootstrap or custom styles)
│ ├── js/ # JavaScript files (for front-end interactions)
│ └── images/ # Campground images and other media
│
├── .gitignore # Files to ignore in version control (node_modules, logs)
├── app.js # Main app setup (Express configuration)
├── package.json # Project dependencies and scripts
└── README.md # Project documentation and setup instructions``` </pre>

📄 License
This project is for educational purposes only.
