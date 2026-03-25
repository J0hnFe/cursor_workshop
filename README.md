# Cursor workshop

This repository is the home base for a hands-on **Cursor** workshop. It includes a small web app you will extend during the sessions, and it shows how we run and ship that code in one place.

## What is Cursor?

**Cursor** is a code editor (built on VS Code) with integrated AI assistance. You work in normal project files—HTML, CSS, TypeScript, React—and use the AI to explain code, suggest edits, refactor, and debug, always with you in control of what gets saved and committed.

In this workshop, Cursor is the main tool for reading and changing the project alongside the terminal and the browser.

## Technologies in this project

| Technology | Role |
|------------|------|
| **[Next.js](https://nextjs.org/)** | React framework: routing, dev server, and production build. This repo uses the **App Router** (`app/`). |
| **[React](https://react.dev/)** | UI library for components and pages. |
| **[TypeScript](https://www.typescriptlang.org/)** | Typed JavaScript for safer, clearer code. |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling (classes in JSX). |
| **[Node.js](https://nodejs.org/)** | Runtime used by the tooling and dev server (install this on your machine first). |

Optional but useful: **[ESLint](https://eslint.org/)** is configured for code quality (`npm run lint`).

## Prerequisites

- **Node.js** — LTS version recommended (e.g. 20.x or 22.x). [Download](https://nodejs.org/)
- **Git** — for cloning and version control. Windows attendees often need [Git for Windows](https://git-scm.com/download/win); macOS and Linux usually include it or ship it with developer tools.
- **npm** — ships with Node (this repo uses `npm` and `package-lock.json`).

### Check installs (copy-paste for assistants)

1. **Clone** this repository.
2. Open a terminal and **`cd`** into the **project root** (the folder that contains `package.json`).
3. Run the command for **your** operating system below.

#### macOS

Use **Terminal** (or any shell where `bash` is available).

Check only (prints what is missing):

```bash
bash scripts/check-setup.sh
```

Try to install missing tools with **Homebrew** when `brew` is available (optional):

```bash
bash scripts/check-setup.sh --install
```

#### Linux

Use your normal terminal (or **WSL** if that is where you develop).

Check only:

```bash
bash scripts/check-setup.sh
```

Same with `--install` (optional): the script **does not** run `apt`, `dnf`, or `sudo` for you—it only prints distro-appropriate hints.

```bash
bash scripts/check-setup.sh --install
```

#### Windows

The script must run under **bash**. Use **one** of these environments (plain **Command Prompt** or **PowerShell** will **not** work unless you are inside **WSL**):

- **Git Bash** — install [Git for Windows](https://git-scm.com/download/win), open **Git Bash** from the Start menu, then `cd` to the project (paths look like `/c/Users/you/.../cursor_workshop`).
- **WSL** — open your Linux distro, `cd` to the repo (often `/mnt/c/Users/you/.../cursor_workshop`).

Check only:

```bash
bash scripts/check-setup.sh
```

Try **winget** for missing **Node** or **Git** (optional; may ask for elevation; open a **new** terminal afterward):

```bash
bash scripts/check-setup.sh --install
```

## Getting started

Clone the repository, then from the project root:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads when you save changes.

## How we run things in this repo

| Command | What it does |
|---------|----------------|
| `npm run dev` | Starts the **local development server** (use this while building and testing). |
| `npm run build` | Creates an **optimized production build** in `.next/`. |
| `npm run start` | Serves the **production build** locally (run `build` first). |
| `npm run lint` | Runs **ESLint** on the codebase. |

Typical workflow: **`npm install`** once, then **`npm run dev`** whenever you work on the project.

## Project layout

```
app/           # Routes and UI (App Router): layout.tsx, page.tsx, globals.css
public/        # Static assets (images, etc.)
next.config.ts # Next.js configuration
package.json   # Dependencies and scripts
```

The main landing page content lives in **`app/page.tsx`**. Global styles are in **`app/globals.css`**.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Cursor documentation](https://cursor.com/docs)
