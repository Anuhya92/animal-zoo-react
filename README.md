🐾 Animal Explorer
I Built My Own API
While working on this assignment, I looked for a free public Animal API to fetch animal data — but I couldn't find one that was free, reliable, and had the data I needed.
So instead of depending on a third-party API, I built my own REST API from scratch using Express.js (src/server.js). This API holds all the animal data locally and exposes HTTP endpoints that the React frontend calls — just like how a real external API would work.

Project Structure
zoo-api/
└── animal-zoo-react/
    ├── src/
    │   ├── App.jsx                 # Root component with route definitions
    │   ├── main.jsx                # React app entry point
    │   ├── server.js               #   Express API server
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
    │   │   ├── Animals.jsx         # Fetches from  API
    │   │   ├── AnimalDetails.jsx   # Fetches from  API
    │   │   ├── Category.jsx        # Fetches from  API
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   └── styles/
    │       └── style.css
    ├── package.json
    └── vite.config.js

 API — server.js
Since no free animal API was available, I created my own using Express.js.
The animal data lives in src/data/animals.js as a local JavaScript array. The Express server reads this data and serves it through HTTP endpoints — making it behave exactly like a real REST API.
API Endpoints I Built
MethodEndpointWhat It ReturnsGET/api/animalsAll animals (id, name, type, image)GET/api/animals/:idFull details of one animal by IDGET/api/category/:typeAnimals filtered by type (Mammal, Bird, etc.)


How It Works
1. Data Layer (src/data/animals.js)
A static JavaScript array holds all animal data — each entry has an id, name, type (e.g., Mammal, Bird, Reptile, Fish), description, and an image URL.
2. For API (src/server.js)
An Express.js server reads from the data file and exposes three REST endpoints:
MethodEndpointDescription.
*GET/api/animalsReturns all animals (id, name, type, image)
*GET/api/animals/:idReturns full details for a single animal
*GET/api/category/:typeReturns animals filtered by type
The server runs on port 3000 and has CORS enabled so the React frontend can reach it.
3. Frontend React App (src/)
Built with React  and Vite, using React Router DOM  for client-side routing.
Routing (App.jsx)
All pages are nested under the <Layout> component, which provides the shared Navbar and Footer:
/                     → Home page
/animals              → All animals listing
/animals/:id          → Animal detail page
/animals/category/:type → Category filter page
/about                → About page
/contact              → Contact page
Page Workflow
User visits /animals
    │
    ▼
Animals.jsx
  ├─ useEffect: fetch(`http://localhost:3000/api/animals`)
  ├─ Renders dynamic category links (unique types extracted from data)
  └─ Renders AnimalCard for each animal
         │
         ▼ (click card)
AnimalDetails.jsx
  └─ useEffect: fetch(`http://localhost:3000/api/animals/:id`)
         │
         ▼ (click category link)
Category.jsx
  └─ useEffect: fetch(`http://localhost:3000/api/category/:type`)
  Getting Started

  ## Prerequisite

You need to run two servers — the API server and the React dev server.
1. Getting Started
You need to run two servers — the API server and the React dev server.
1. Install dependencies:

Run `npm install` in the root directory

2. Start the API server (Terminal 1)

To start express server, run `npm run start:server`

API is now running at http://localhost:3000

3. Start the React frontend (Terminal 2)

To start frontend, run `npm run dev`

Frontend is now running at http://localhost:5173

Open http://localhost:5173 in your browser.

  