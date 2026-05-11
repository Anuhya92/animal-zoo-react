# Animal Explorer

Animal Explorer is a React app where users can browse animals, view animal details, and filter animals by category.

## Features

- Home page with hero image and animal cards
- Animals page with category links
- Animal details sub page
- Category sub page
- About page
- Contact page
- Shared navbar and footer using Layout and Outlet
- Animal content loaded from `src/data/animals.json`
- Responsive design with CSS modules

## How To Start

1. Open the project folder:

```bash
cd animal-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

Usually it is:

```text
http://localhost:5173
```

## Build The Project

To create a production build:

```bash
npm run build
```

## Project Structure

```text
src
  components
    AnimalCard.jsx
    Footer.jsx
    HeroImage.jsx
    Navbar.jsx
  data
    animals.json
  layout
    Layout.jsx
  pages
    About.jsx
    AnimalDetails.jsx
    Animals.jsx
    Category.jsx
    Contact.jsx
    Home.jsx
  styles
    style.css
  App.jsx
  main.jsx
```

## Routes

```text
/                         Home
/animals                  Animals
/animals/:id              Animal details
/animals/category/:type   Animal category
/about                    About
/contact                  Contact
```
