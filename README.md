# React Contact Cards Application

# Project Overview

The React Contact Cards Application is a Single Page Application (SPA) built using React that allows users to create and display contact information dynamically. The application captures user input through a form and instantly renders contact cards on the same page without refreshing.

This project demonstrates the power of React’s component-based architecture and dynamic state management for building interactive web applications.

---

# Objective

The main goal of this project is to:

* Build a dynamic SPA using React
* Understand component-based design
* Handle user input efficiently
* Manage and update application state
* Render data dynamically in the UI

---

# Key Features

*  User input form for creating contacts
*  Dynamic addition of contact cards
*  Real-time UI updates without page reload
*  Modular and reusable components
*  Clean and structured folder organization
*  Responsive and interactive interface

---

# Technologies Used

* **React JS** – UI development
* **JavaScript (ES6+)** – Application logic
* **HTML5** – Structure
* **CSS3** – Styling
* **Vite / Create React App** – Development environment

---

# Application Architecture

# Component Breakdown

#### 1. App Component

* Acts as the root component
* Maintains the list of contacts (state)
* Passes data and functions to child components

#### 2. Form Component

* Takes user input (name, email, phone, etc.)
* Handles form submission
* Sends data to the parent component

#### 3. UserList Component

* Receives contact data as props
* Iterates through the list
* Renders multiple contact cards

#### 4. ContactCard Component

* Displays individual contact details
* Reusable and customizable

---

# Data Flow (Working Logic)

1. User enters details in the form
2. On submission:

   * Data is captured using event handling
   * Passed to the parent (App component)
3. App updates its state with new contact
4. Updated state is passed to UserList
5. UserList re-renders and displays new contact card

 This demonstrates **unidirectional data flow in React**

---

# Folder Structure

```id="3akcbg"
react-contact-cards/
│── public/
│── src/
│   ├── components/
│   │   ├── ContactCard.jsx
│   │   ├── UserList.jsx
│   │   ├── Form.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles/
│── package.json
│── README.md
```

---

# How to Run the Project

1. Install dependencies:

```id="yazb1m"
npm install
```

2. Start the development server:

```id="2hwy4e"
npm run dev
```

3. Open in browser:

```id="1th4rq"
http://localhost:5173
```

---

# Functional Flow

* Input → State Update → Re-render UI
* No page reload required (SPA behavior)
* Efficient DOM updates using React Virtual DOM

---

# Learning Outcomes

* Understanding React components and props
* Managing state effectively
* Handling forms and events in React
* Building scalable UI with reusable components
* Implementing dynamic rendering

---

# Future Enhancements

* Add edit and delete functionality
* Store contacts using localStorage or database
* Add search and filter options
* Improve UI with modern design libraries
* Add validation for form inputs

---

# Conclusion

This project provides a strong foundation in React development by combining form handling, state management, and dynamic rendering. It showcases how modern web applications can deliver seamless user experiences using efficient frontend technologies.
