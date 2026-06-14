# Airizz Monorepo

Welcome to the Airizz workspace. This repository has been structured as a monorepo consisting of:

- **`frontend/`**: The Next.js web application.
- **`backend/`**: The Node.js Express backend application (using TypeScript).

---

## Directory Structure

```text
airizz-website/
├── frontend/             # Next.js frontend application
│   ├── app/
│   ├── components/
│   ├── package.json
│   └── ...
├── backend/              # Node.js Express backend (TypeScript)
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── ...
├── package.json          # Root scripts and workspace settings
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

Install dependencies for both frontend and backend projects from the root using:

```bash
npm run install:all
```

### Running the Development Servers

You can run both development servers concurrently or individually from the root folder:

- **Run Frontend**:
  ```bash
  npm run dev:frontend
  ```
- **Run Backend**:
  ```bash
  npm run dev:backend
  ```

---

## Technical Details

- **Frontend**: Built with Next.js, React, TailwindCSS, and TypeScript.
- **Backend**: Built with Node.js, Express, and TypeScript.
