🐾 Animal Explorer
While working on this assignment, I looked for a free public Animal API to fetch animal data — but I couldn't find one that was free, reliable, and had the data I needed.
So instead of depending on a third-party API, I built my own REST API from scratch using Express.js (src/server.js). This API holds all the animal data locally and exposes HTTP endpoints that the React frontend calls — just like how a real external API would work.

Project Structure
zoo-api/
└── animal-zoo-react/
    ├── api/
    │   ├── animals.js              # Serverless function for /api/animals
    │   ├── animals/[id].js         # Serverless function for /api/animals/:id
    │   └── category/[type].js      # Serverless function for /api/category/:type
    ├── src/
    │   ├── App.jsx                 # Root component with route definitions
    │   ├── main.jsx                # React app entry point   
    │   ├── data/
    │   │   └── animals.js          # Animal data used by the API
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── AnimalCard.jsx
    │   │   ├── HeroImage.jsx
    │   │   └── Footer.jsx
    │   ├── layout/
    │   │   └── Layout.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Animals.jsx         # Fetches from API
    │   │   ├── AnimalDetails.jsx   # Fetches from API
    │   │   ├── Category.jsx        # Fetches from API
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   └── styles/
    │       └── style.css
    ├── package.json
    ├── vercel.json                 # Vercel configuration
    └── vite.config.js

Since no free animal API was available, I created my own using Vercel serverless functions.

The animal data lives in src/data/animals.js as a local JavaScript array. The Express server reads this data and serves it through HTTP endpoints — making it behave exactly like a real REST API.
API Endpoints I Built
MethodEndpoint What It Returns

- GET/api/animals All animals (id, name, type, image)
- GET/api/animals/:idFull details of one animal by ID
- GET/api/category/:typeAnimals filtered by type (Mammal, Bird, etc.)

How It Works

1. Data Layer (src/data/animals.js)
   A static JavaScript array holds all animal data — each entry has an id, name, type (e.g., Mammal, Bird, Reptile, Fish), description, and an image URL.
2. For API (api/ folder)
   Vercel serverless functions in the api/ folder read from the data file and expose three REST endpoints:
   MethodEndpointDescription.
   *GET/api/animalsReturns all animals (id, name, type, image)
   *GET/api/animals/:idReturns full details for a single animal
   \*GET/api/category/:typeReturns animals filtered by type
   The functions are deployed on Vercel and have CORS enabled so the React frontend can reach them.
3. Frontend React App (src/)
   Built with React and Vite, using React Router DOM for client-side routing.
   Routing (App.jsx)
   All pages are nested under the <Layout> component, which provides the shared Navbar and Footer:
   / → Home page
   /animals → All animals listing
   /animals/:id → Animal detail page
   /animals/category/:type → Category filter page
   /about → About page
   /contact → Contact page
   Page Workflow
   User visits /animals
   │
   ▼
   Animals.jsx
   ├─ useEffect: fetch(`https://your-vercel-app.vercel.app/api/animals`) # Update with your Vercel URL
   ├─ Renders dynamic category links (unique types extracted from data)
   └─ Renders AnimalCard for each animal
   │
   ▼ (click card)
   AnimalDetails.jsx
   └─ useEffect: fetch(`https://your-vercel-app.vercel.app/api/animals/:id`) # Update with your Vercel URL
   │
   ▼ (click category link)
   Category.jsx
   └─ useEffect: fetch(`https://your-vercel-app.vercel.app/api/category/:type`) # Update with your Vercel URL
   Getting Started

## Prerequisite

You need to deploy the API to Vercel and run the React dev server locally, or deploy both.

1. Getting Started
1. Install dependencies:

Run `npm install` in the root directory

2. Deploy the API to Vercel (or run locally with Vercel CLI)

To deploy, run `vercel --prod` (assuming Vercel CLI is installed and configured)

API is now running at your Vercel URL https://animal-zoo-react.vercel.app/

For local development with Vercel CLI, run `npx vercel dev` in the root directory
