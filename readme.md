live version at [https://clipcloud.vercel.app/](https://clipcloud.vercel.app/)


# 🎬 DummyTube — A Simple Video Streaming Platform

DummyTube is a lightweight video streaming web app (like a simple YouTube clone) built with modern frontend technologies. It features user authentication, video uploading, playback, and basic CRUD operations for video content.

---

## 🚀 Features

- 🔐 **User Authentication** — Sign in and manage sessions using [Appwrite](https://appwrite.io/)
- 🎥 **Video Upload & Playback** — Upload videos to Appwrite and stream them from the browser
- ✏️ **Video CRUD** — Create, Read, Update, and Delete videos
- 🗃️ **Local Caching** — Use [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) via `dexie` for client-side data storage
- ♻️ **State Persistence** — Redux with `redux-persist` to retain state across refreshes
- 🎨 **UI** — Built with [Material UI](https://mui.com/) and styled using Tailwind CSS

---

## 🧱 Tech Stack

| Category      | Tools / Libraries                                  |
|---------------|----------------------------------------------------|
| Framework     | [React](https://reactjs.org/)                      |
| State Mgmt    | [Redux Toolkit](https://redux-toolkit.js.org/) + `redux-persist` |
| Backend       | [Appwrite](https://appwrite.io/)                   |
| DB (client)   | [Dexie.js](https://dexie.org/) (IndexedDB wrapper) |
| Styling       | Tailwind CSS + MUI (Material UI)                   |
| Tooling       | Vite, Eslint, PostCSS                              |

---

## 📦 Getting Started

### 1. set up environment variables
VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id

### npm install

### npm run dev



