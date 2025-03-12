# Lucy Tran's Portfolio Website

This repository contains the source code for my personal portfolio website, built with Next.js.

## Overview

This website showcases my skills and experience in full-stack development, AI, and cloud technologies through a collection of projects and blog posts. It's designed to be a visually appealing and informative platform for potential employers, clients, and collaborators.

## Technologies Used

*   **Frontend:**
    *   Next.js (React framework)
    *   TypeScript
    *   Tailwind CSS (for styling)
    *   MDX (for blog content)
*   **Backend:**
    *   Next.js API routes (for contact form submission)
*   **Deployment:**
    *   Netlify

## Project Structure

The project is organized using Next.js's `app` directory structure:

*   `src/app/`: Contains the route handlers, pages, and layout components.
    *   `src/app/api/`: API routes for handling form submissions and other server-side logic.
    *   `src/app/blogs/`: Contains blog posts rendered with MDX. Uses dynamic routes (`[slug]`) for individual posts.
    *   `src/app/contact/`: Contact page component.
    *   `src/app/projects/`: Showcases different projects
*   `src/components/`: Reusable React components.
    *   `AnimatedBackground.tsx`: Animated background element.
    *   `BlogCard.tsx`: Component for blog post previews.
    *   `ExperienceCard.tsx`: Component for showcasing experience and projects.
    *   `Navbar.tsx`: Navigation bar component.
*   `src/images/`: Contains static images used throughout the website.
*   `.env`: Stores environment variables (API keys, database credentials, etc.).

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install  # Or yarn install
    ```

2. **Configure environment variables:**

    *   Create a `.env` file in the root directory.
    *   Add the necessary environment variables (see `.env.example` or the "Environment Variables" section below).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Environment Variables

The following environment variables are required:

*   `EMAIL_USER`: Your Gmail address (used for sending contact form submissions).
*   `EMAIL_APP_PASSWORD`: An App Password generated for your Gmail account.
*   `EMAIL_RECEIVER`:
