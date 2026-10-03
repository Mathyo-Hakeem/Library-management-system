# Library Management System

A web-based Library Management System designed to manage books, users, and borrowing/returning operations.  
This project is currently in development and will evolve into a full-stack application.

---

## Features (Front-end Completed)
- User login page
- User registration page
- Browse books page
- Edit book page
- Responsive layout (work in progress)

---

## Tech Stack
**Front-end:** HTML, CSS, JavaScript  
**Back-end:** PHP (planned)  
**Database:** MySQL (planned)

---

## Project Structure
- `index.html` – Home page
- `browse.html` – Browse books
- `edit.html` – Edit book details
- `login.html` – User login
- `signUp.html` – User registration
- `styles.css` – Styling
- `script.js` – Front-end logic
- `backend/` – (To be added)
- `database.sql` – (To be added)

---

## Backend Plan (To Be Implemented)
### PHP Pages
- `login.php` – User authentication
- `register.php` – Create new users
- `db_connect.php` – Database connection
- `dashboard.php` – Admin dashboard
- `books.php` – Manage books (CRUD)
- `borrow.php` – Borrow a book
- `return.php` – Return a book

### Database Tables
- `users`: id, name, email, password, role  
- `books`: id, title, author, category, status  
- `borrows`: id, user_id, book_id, borrow_date, return_date, status  

---

## Future Improvements
- Admin roles
- Search and filter books
- Activity logs
- REST API integration
- React front-end (optional upgrade)

---

## Project Status
Front-end uploaded.  
Backend development starts next.
