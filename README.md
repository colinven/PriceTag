# PriceTag

An automated house wash quoting tool to be used by exterior cleaning companies. Customers enter their address and contact info, and PriceTag instantly pulls property data and calculates a ballpark price range for a house wash at their address.

---

## How It Works

1. Customer fills out the quote form with their contact info and address
2. The Express server spawns a Python script that scrapes property data (sq footage, stories, year built) via [HomeHarvest](https://github.com/ZacharyHampton/HomeHarvest)
3. The pricing service calculates a price range based on the property data
4. The customer is directed to a results page displaying their quote

---

## Project Structure

```
pricetag/
├── client/                   # React frontend (Vite)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── landing/            # Hero
│   │   │   ├── layout/             # Header
│   │   │   ├── quote/              # QuoteForm
│   │   │   └── quote-results/      # QuotePage Components
│   │   ├── pages/                # LandingPage, FormPage, QuotePage
│   │   ├── services/             # API call logic (other front end logic to be added)
│   │   ├── styles/               # Global SCSS (variables, base, components, animations)
│   │   ├── App.jsx                 
│   │   └── main.jsx
│   └── package.json
│
├── server/                   # Node/Express backend
│   ├── response/                 # API response entities
│   ├── services/                 # Pricing logic (other backend logic to be added)
│   ├── scripts/
│   │   ├── venv/                   # Python virtual environment (git ignored)
│   │   ├── property_lookup.py      # Address scraping logic (using HomeHarvest)
│   │   └── requirements.txt        # Python dependencies (HomeHarvest and it's dependencies)
│   ├── index.js                  # Express controller logic
│   └── package.json
│
├── setup.sh                  # One-time project setup script to install dependencies
└── README.md
```

---

## Setup

### Prerequisites

- Node.js
- Python 3
- npm

### Install

Clone the repo, then run the setup script from the project root:

```bash
chmod +x setup.sh
./setup.sh
```

This will:
- Create a Python virtual environment at `server/scripts/venv/`
- Install Python dependencies (`homeharvest`)
- Install Node dependencies for both `client/` and `server/`

### Run

Start the Express & React dev servers concurrently from root directory:

```bash
chmod +x start.sh
./start.sh
```
OR manually:

Start the Express server:
```bash
cd server
node index.js
```

Start the React dev server:
```bash
cd client
npm run dev
```

The React app runs on `http://localhost:5173`, API requests routed to Express on `http://localhost:3000`.

---

## Dependencies

### Frontend
- React
- React Router DOM
- Vite
- Sass

### Backend
- Express
- Python 3
- HomeHarvest library

---

## Core Features

- **Instant quote generation** — property data is scraped automatically from the address provided, no manual input needed
- **Automated pricing** — price range (configurable) is calculated server-side based on sq footage, stories, and year built 
- **No page reloads** — built as a single-page app with client-side routing via React Router

---

## Roadmap

- **Street view imaging** — integrate Google Maps Street View Static API to display street view imaging on quote result pages
- **Robustify scraping logic** — this tool is only meant to price residential properties, therefore queries for other property types (commercial, multifamily) will produce unpredictable results
- **Automated email support** — integrate with an email api to send automated emails containing: copy of quote details (customer-side), quote details and customer contact details (company-side)
- **Multi-Service quoting support** — implement functionality to quote different services (concrete pressure washing, window cleaning, gutter cleaning, etc.)
- **Company account/profile registration** — different companies will be able to use this tool by creating a profile. this will allow company-specific branding to be displayed throughout the app in order to make the app more personalizable.
- **CRM Integration (Future Project)** — eventually, this will be a core feature of a larger CRM project made for exterior cleaning companies
- **Even more to be brainstormed!**

---

## Notes

<!-- Add any development notes, known issues, or decisions here -->