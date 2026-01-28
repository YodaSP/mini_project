# MahadevMinds DevOps Mini Project — Sample Web App

A minimal Node.js + Express app that serves a single-page web UI. Users enter their name and skill, click “I am ready for my interview”, and a full-screen celebration appears wishing them all the best with confetti.

## Quick Start

Prerequisites: Node.js 18+ and npm.

```powershell
# From the project root
npm install
npm start
```

Then open http://localhost:3000

- Health check: http://localhost:3000/health
- Configure port with `PORT` env var.

## Project Structure

```
mini_project/
├─ package.json
├─ server.js
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
└─ README.md
```

## Notes

- Frontend uses `canvas-confetti` via CDN for animation.
- No backend persistence; all personalization is client-side.
- Suitable as a DevOps mini project seed (add CI/CD, containerization, etc.).
