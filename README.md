
# Express.js RESTful API Lab

Welcome to your first Express.js lab! In this 20-minute hands-on project, you'll work with a partner to build a RESTful API using Express.js and JavaScript. The goal is to understand how to create API endpoints and interact with data using HTTP methods.

# 🧠 Learning Objectives

By the end of this lab, you will be able to:

Set up an Express.js server

Create basic RESTful API routes (GET, POST, DELETE)

Use Postman or curl to test endpoints

Understand how this fits into the Software Development Life Cycle (SDLC)

# 🛠️ Prerequisites

Node.js and npm installed

Basic JavaScript knowledge

Code editor (VSCode recommended)

Postman or curl for testing endpoints

# 🗂️ Project Structure

express-api-lab/
├── README.md
├── package.json
├── index.js
├── routes/
│   └── books.js
├── data/
│   └── books.json
└── .gitignore

# 🚀 Setup Instructions

git clone https://github.com/your-username/express-api-lab.git
cd express-api-lab
npm install
node index.js

Then open your browser or Postman to test the routes.

# 📚 API Endpoints

GET /books

Returns the full list of books

POST /books

Adds a new book

Request Body (JSON):

{
  "id": 3,
  "title": "New Book",
  "author": "Author Name"
}

GET /books/:id

Retrieves a book by ID

DELETE /books/:id

Deletes a book by ID

💡 Bonus Challenge

Add a PUT /books/:id route to update a book’s title and author.

# 🔁 Software Development Life Cycle (SDLC)

Here’s how this lab fits into the SDLC:

Requirements – Build an API to manage books

Design – Use Express.js, routes, and JSON data

Implementation – Write and test code

Testing – Use Postman or curl to verify endpoints

Iteration – Improve code and add features (bonus challenge)

Documentation – This README and your comments

# 👯‍♀️ Working in Pairs

One partner types while the other helps debug and test

Switch roles halfway through the lab

✅ Wrap-Up

Test your routes using Postman

Push your changes to GitHub

Reflect: How does what you built relate to the SDLC?

You're on your way to building full-stack apps—great job!