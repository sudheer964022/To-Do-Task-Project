# 📝 TaskBuddy - A React To-Do Application

<div align="center">

![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Build-orange?style=for-the-badge&logo=vite)

</div>


---

<h2>📌 Overview</h2>

**TaskBuddy** is a **clean**, **responsive**, and **persistent** to-do list application built using **React** and **Vite**.  
It allows users to **manage daily tasks**, **set priorities**, **categorize** them, and **track progress visually** — all while saving data in `localStorage` so your tasks stay safe even after closing the browser.

---
<div align="center">
<h2>🚀 Features</h2>

| Feature | Description |
|----------|-------------|
| 🆕 **Add Tasks** | Quickly add new tasks with a simple form. |
| 📋 **Task Details** | Each task includes **title**, **priority**, and **category**. |
| 🔴🟡🟢 **Priority Levels** | High (red), Medium (yellow), Low (green). |
| 📦 **Persistent Storage** | Saves all tasks to **localStorage** — persists across sessions. |
| ✅ **Task Management** | Mark tasks as complete / undo completion. |
| ❌ **Delete & Clear** | Delete a single task or clear all tasks (with confirmation). |
| ⚡ **Progress Tracker** | Visual progress bar with text counter for completion. |
| 🪶 **Responsive Design** | Adapts perfectly to **mobile**, **tablet**, and **desktop**. |
| 🕳️ **Empty State View** | Displays an icon and message when no tasks exist. |
</div>

<hr>

<div align="center">
<h2>🛠️ Tech Stack</h2>

| Tool | Purpose |
|------|----------|
| ⚛️ **React 19** | Frontend UI framework |
| ⚡ **Vite** | Fast build tool and dev server |
| 🎨 **CSS** | Custom styling with variables & media queries |
| 🧩 **React Icons** | For beautiful, consistent icons |
</div>

<hr>


## 📂 Project Structure
```plaintext
To-Do-Task-Project/
├── src/
│ ├── App.jsx                   # Main component controlling tasks and localStorage
│ ├── Components/
│ │ ├── TaskForm.jsx            # Handles task input (title, priority, category)
│ │ ├── TaskList.jsx            # Displays list of all tasks
│ │ ├── ProgressTracker.jsx     # Shows visual task completion progress
│ │ ├── PriorityIndicator.jsx   # Displays colored dots for priority
│ │ └── NoTaskIcon.jsx          # SVG shown when task list is empty
│ ├── Style.css                 # Main stylesheet with all custom styles
│ └── main.jsx                  # React app entry point
├── index.html                  # HTML template for Vite
├── package.json                # Project configuration and dependencies
└── vite.config.js              # Vite build configuration
```



---

## ⚙️ Installation & Setup

Follow these steps to set up **To-Do-Task** locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sudheer964022/To-Do-Task-Project.git
```
```bash
cd taskbuddy
```
```bash
npm install
```

```bash
npm run dev
```

Now open (http://localhost:5173) in your browser to view TaskBuddy.
<hr>

<h1>🎯 Key Components Overview</h1>

```bash

🧩 App.jsx

Manages global task state (useState, useEffect)

Handles localStorage persistence

Controls CRUD operations and passes data to child components

🧾 TaskForm.jsx

Controlled form to add new tasks

Inputs: task name, priority, and category

🗂️ TaskList.jsx

Maps over tasks and displays each one with complete, undo, or delete functionality

📊 ProgressTracker.jsx

Dynamically calculates completed tasks and shows a progress bar

🔴 PriorityIndicator.jsx

Displays a colored dot based on priority:

🔴 High

🟡 Medium

🟢 Low

🚫 NoTaskIcon.jsx  (.svg)

```

<hr>

<h2>📸 Screenshots</h2>

<img width="1919" height="1145" alt="Screenshot 2025-10-25 000206" src="https://github.com/user-attachments/assets/14db0b51-61b5-48b4-91ec-1a9f14aaa1c4" />

---

<img width="1914" height="1147" alt="Screenshot 2025-10-25 000640" src="https://github.com/user-attachments/assets/578b4206-4b62-45f1-8c4a-aa82f9f18bf2" />


