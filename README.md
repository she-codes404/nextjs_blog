# Next.js Blog

A simple blog application built with Next.js.

## Features
* Server-side rendering
* Static site generation
* Dynamic routing
* Markdown blog posts
* Responsive design

## Getting Started

### Prerequisites
* Node.js (v14 or later)
* npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/she-codes404/nextjs_blog.git
```

2. Navigate to the project directory
```bash
cd nextjs_blog
```

3. Install dependencies
```bash
npm install
```

or if you use yarn:
```bash
yarn install
```

## Development
Run the development server:
```bash
npm run dev
```

or with yarn:
```bash
yarn dev
```

Open **http://localhost:3000** with your browser to see the result.

## Build
Build the application for production:
```bash
npm run build
```

or with yarn:
```bash
yarn build
```

## Start Production Server
Start the production server:
```bash
npm run start
```

or with yarn:
```bash
yarn start
```

## Project Structure
```
nextjs_blog/
├── components/     # Reusable UI components
├── lib/            # Utility functions
├── pages/          # Pages and API routes
├── posts/          # Markdown blog posts
├── public/         # Static assets
├── styles/         # CSS styles
└── ...
```

## Adding Blog Posts
Add new blog posts as Markdown files in the `posts` directory. Each post should include frontmatter with metadata:

```markdown
---
title: 'My New Post'
date: '2023-05-01'
excerpt: 'A brief description of the post'
---

Content goes here...
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
* **Next.js**
* **React**
* **Markdown**