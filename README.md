# Assignment2026 – React.js Project Guide

This README is **specifically written for THIS project**, based on the actual folder structure and features you have implemented.

---

## 📌 Project Overview

**Assignment2026** is a React.js-based image interaction platform.

### Key Features

* 🏠 **Home Page** – Browse images from Unsplash
* 💾 **Save Images** – Users can save images
* ❤️ **React with Emojis** – Emoji reactions (like, fire, laugh, etc.)
* 💬 **Comments System** – Add, edit, and delete comments
* 📰 **Feed / Saved Page** – View all saved images with reactions & comments
* 👀 **Public Visibility** – Other users can see who reacted and commented

---

## 🧱 Tech Stack Used

| Technology   | Purpose            |
| ------------ | ------------------ |
| React.js     | Frontend UI        |
| Vite         | Fast build tool    |
| Tailwind CSS | Styling            |
| InstantDB    | Real-time database |
| Unsplash API | Image source       |
| Emoji Picker | Emoji reactions    |

---

## 📂 Folder Structure Explained

```
Assignment2026/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/                # Unsplash API calls
│   │   ├── assets/             # Images & static assets
│   │   ├── components/
│   │   │   ├── Comments/
│   │   │   │   └── CommentsPanel.jsx
│   │   │   ├── gallery/
│   │   │   │   └── GalleryGrid.jsx
│   │   │   ├── Reaction/
│   │   │   │   └── EmojiBar.jsx
│   │   │   ├── AddPost.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── FeedItem.jsx
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx     # Image browsing page
│   │   │   └── FeedPage.jsx     # Saved / Feed page
│   │   ├── db.js                # InstantDB connection
│   │   ├── instant.db.ts        # InstantDB config
│   │   ├── instant.schema.ts    # DB schema
│   │   ├── instant.perms.ts     # Permissions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   └── package.json
└── README.md
```

---

## 🏠 Home Page (HomePage.jsx)

### What happens on Home Page?

* Images are fetched from **Unsplash API**
* User can:

  * View images
  * Save images
  * React with emojis
  * Add comments

### Main Components Used

* `GalleryGrid.jsx`
* `EmojiBar.jsx`
* `CommentsPanel.jsx`

---

## 📰 Feed / Saved Page (FeedPage.jsx)

### Purpose

The Feed page shows **all saved images** along with:

* Who reacted
* Which emoji reactions
* How many reactions
* Who commented
* Editable comments (only owner)

### Features

* Pagination
* Emoji reactions visible to all
* Comment edit & delete
* Modal view for image focus

---

## 😀 Emoji Reactions (EmojiBar.jsx)

### How Emoji Reactions Work

* Emoji Picker allows selecting any emoji
* Only **one reaction per user per image**
* Clicking same emoji again removes reaction
* Reaction count updates in real-time

### Stored Data

* Emoji
* User ID
* Image ID
* Timestamp

---

## 💬 Comments System

### Capabilities

* Add comments
* Edit own comments
* Delete own comments
* See other users' comments

### Component

* `CommentsPanel.jsx`

---

## 🗄 Database (InstantDB)

### Entities

* images
* users
* reactions
* comments

### Benefits

* Real-time updates
* Simple schema
* Secure permissions

---

## 🔑 Environment Setup (.env)

```
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_key_here
```

---

## ⚙️ How to Run Project Locally

### Step 1: Clone Repository

```
git clone <your-github-repo-url>
cd Assignment2026/Frontend
```

### Step 2: Install Dependencies

```
npm install
```

### Step 3: Start Development Server

```
npm run dev
```

Open browser at:

```
http://localhost:5173
```

---

## 🧠 What You Learn From This Project

* React component architecture
* State management with hooks
* API integration
* Real-time databases
* UI/UX design
* Modular project structure

---

## 🎯 Future Improvements

* Authentication system
* User profiles
* Search & filters
* Image categories
* Notifications

---

## 👨‍💻 Author

**Assignment2026 – React.js Project**
Designed & developed for learning and academic submission.

---

✅ This README is **project-specific**, **exam-ready**, and **GitHub-ready**.
