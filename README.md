# Registration-form
A modern login and signup form built using React, designed with a responsive and user-friendly interface.
Deployed on Netlify : https://registration-form-sana.netlify.app/

# 🔐 React Authentication System

## 📌 Overview

This project is a **React-based frontend application** that implements a complete user authentication flow, including:

* User Registration (Sign Up)
* User Login (Authentication)
* Protected Dashboard

It demonstrates core React concepts like **state management, routing, and form handling**.

---

## 🚀 Features

* 🔐 User Signup & Login
* 💾 Data stored using **localStorage**
* 🔒 Protected Dashboard (only accessible after login)
* 👁 Password visibility toggle
* ⚡ Client-side validation
* 🎨 Modern UI with gradient & glassmorphism

---

## 🛠️ Technologies Used

* React 18
* React Router DOM
* JavaScript (ES6)
* HTML5 & CSS3
* LocalStorage API

---

## 📂 Project Structure

```id="o7k9ut"
src
├── components
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Dashboard.jsx
│
├── App.js
├── App.css
├── index.js
└── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash id="l9pf06"
git clone (https://github.com/sana-saniya/Registration-form)
```

2. Navigate to project folder

```bash id="ztnb7c"
cd login-signup
```

3. Install dependencies

```bash id="u8gl8b"
npm install
```

4. Run the project

```bash id="x2u0wa"
npm start
```

---

## 🔑 How It Works

* Users register via **Signup page**
* Data is stored in **localStorage**
* Login verifies credentials
* On success → user redirected to **Dashboard**
* Dashboard is protected using authentication check

---

## 🔒 Authentication Flow

1. User signs up → data saved in localStorage
2. User logs in → credentials verified
3. Logged user stored as `loggedUser`
4. Dashboard checks authentication before rendering
5. Logout removes session

---

## 🎯 Future Improvements

* Backend integration (Node.js / Spring Boot)
* JWT Authentication
* Database storage (MySQL / MongoDB)
* Better UI animations
* Form validation using libraries

---

## 👨‍💻 Author

**Shaik Sana Saniya Banu**

---

## 📜 License

This project is for educational purposes.

