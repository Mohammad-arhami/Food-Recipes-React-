# 🍳 Recipe App

> A modern recipe management application built with React, React Router, and JSON Server

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![React Router](https://img.shields.io/badge/React_Router-6.14.0-CA4245?style=flat&logo=react-router)
![JSON Server](https://img.shields.io/badge/JSON_Server-0.17.4-5A29E4?style=flat)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📝 About

**Recipe App** is a full-featured web application for managing cooking recipes. With this app you can:

- 📋 Browse all recipes
- 🔍 Search recipes by title, ingredients, or method
- ✏️ Create new recipes with detailed information
- 📖 View complete recipe details

The project is built with **React** on the frontend and **JSON Server** as a lightweight backend. All data is stored locally and no internet connection is required.

---

## ✨ Features

### Core Features

| Feature | Description |
|---------|-------------|
| 📋 **View All Recipes** | Browse complete list with summary information |
| 🔍 **Advanced Search** | Search in title, ingredients, and cooking method |
| ✏️ **Add New Recipe** | Complete form with validation |
| 📖 **Recipe Details** | View full recipe information |
| 🔄 **Real-time Updates** | Changes are saved instantly |

### UI/UX Features

- ✅ Fully responsive design for all devices
- ✅ Clean and modern interface
- ✅ Loading states for better UX
- ✅ Error handling with user feedback
- ✅ Dynamic ingredient management

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Library |
| **React Router** | 6.14.0 | Routing & Navigation |
| **CSS3** | - | Styling |
| **JavaScript (ES6)** | - | Application logic |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **JSON Server** | 0.17.4 | REST API & Database |

### Development Tools

- **npm** - Package manager
- **Git** - Version control
- **ESLint** - Code quality

---

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git (for cloning)

### Setup Steps

#### Option 1: Clone the repository

```bash
# Clone the repository
git clone https://github.com/your-username/recipe-app.git

# Navigate to project directory
cd recipe-app

# Install dependencies
npm install

# Install JSON Server globally
npm install -g json-server@0.17.4

# Start JSON Server (Terminal 1)
json-server --watch db.json --port 3000

# Start React App (Terminal 2)
npm start