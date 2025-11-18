# Student Enviroment App

A small React + Vite dashboard designed for students to track tasks and study habits in a simple, distraction-free interface.

## Tech Stack

React (with functional components + hooks)

Vite

JavaScript

HTML5 & CSS

React Router (client-side routing)

Features Current

Multi-page navigation with Home, About, and Contact pages via React Router
Basic Todo List with:

Add new tasks via input form
Delete tasks individually
Display list of tasks
Empty state messaging

Component architecture:

TodoList

TodoItem

Separate page components (Home, About, Contact)

## Project Structure

```
src/
  ├── App.jsx (routing setup)
  ├── pages/
  │   ├── home.jsx
  │   ├── about.jsx
  │   └── contact.jsx
  └── components/
      ├── todolist.jsx
      └── todoitem.jsx
```

## dark mode notes

```
 Dark mode works by:
 1. Tailwind checks if <html> has class="dark"
 2. If yes, use dark:bg-gray-900
 3. If no, use bg-white
```

## Getting Evereything Set Up

```bash


# Clone the repo
git clone https://github.com/Britten66/student_enviroment.git
cd student_enviroment
cd student_app

# Install dependencies
npm install

# Run the dev server
npm run dev
```
