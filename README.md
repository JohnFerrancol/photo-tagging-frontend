# Photo Tagging Front-end

[Live Demo](https://photo-tagging-frontend.vercel.app)<br/><br/>
[Link To Back End Repository](https://github.com/JohnFerrancol/photo-tagging-backend)<br/><br/>
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-A9792B?logo=theodinproject&logoColor=fff)](#)

## Overview

This is a project from [The Odin Project](https://theodinproject.com): [Project: Project: Where's Waldo (A Photo Tagging App)](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app). This Photo Tagging App Project is inspired by [Where's Waldo](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) game. This is where you are presented with a busy and crowded illustration that contains many different people, objects, and places. Your task is to find a particular character named Waldo, who is hidden somewhere in the illustration.

## Tech Stack

- [![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
- [![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
- [![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
- [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)

## Project Structure

```sh
photo-tagging-frontend/
│
├── public/
│   │
│   ├── website-logo.svg
│   │
├── src/
│   │
│   ├── pages/
│   │   ├── HomePage.jsx           // Page rendered to allow users to navigate to the leaderboards page or an individual game page
│   │   └── GamePage.jsx           // Page rendered where the user is going to play the specified game selected from the home page
│   │   └── LeaderboardPage.jsx    // Page render to allow users to see the leaderboard for each game
│   │
│   ├── components/
│   │   └── game
│   │       ├── CharacterDropdown.jsx  // Render the dropdown of characters not found yet in the game
│   │       └── CompletionModal.jsx    // Render the modal to let users input their name to the leaderboard
│   │       └── GameHeader.jsx         // Render the header to show the game name, character images to find and the time
│   │       └── GameImage.jsx          // Render the actual game image
│   │       └── MarketsLayer .jsx      // Render the markets in the game image to show users wrong and right guesses
│   │
│   │   └── home
│   │       └── GameLink.jsx           // Render a Link Component to navigate the users to the /games/:gameId route
│   │
│   │   └── leaderboard
│   │       ├── LeaderboardLink.jsx    // Render a Link Component to navigate the users to the /leaderboards/:gameId route
│   │       └── LeaderboardTable.jsx   // Render the actual leaderboard table for each game
│   │
│   │   └── shared
│   │       ├── FetchFailure.jsx       // Render an error message when there is any error in fetching the data
│   │       └── LoadingComponent.jsx   // Render the loading component when waiting for data to be fetched
│   │       └── Navbar.jsx             // Render the Application Navabar
│   │
│   ├── hooks/
│   │   ├── useGames.js               // React Hooks relating to data retrieval and manipulation of the /api/v1/games APIs
│   │   └── useLeaderboard.js         // React Hooks relating to data retrieval and manipulation of the /api/v1/leaderboards APIs
│   │   └── useTimer.js               // React Hook to display a timer for the game session
│   │
│   ├── routes/
│   │   └── routes.jsx             // Define the routes in the React Single Page Application: /, /leaderboards, /games/:gameId
│   │
│   ├── styles/
│   │   └── App.css                // Where tailwindcss is defined and called to be used in the Pages and Components
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── .env.production                // Environment variables for the production server: Vercel App
└── .env.development               // Environment variables for the developer server: Localhost
└── .prettierrc
└── eslint.config.js
└── vite.config.js
└── vercel.json
└── index.html
```

## Getting Started

### Prerequisites

You will need to install the latest version of npm to get started on using this project

- npm

```sh
npm install npm@latest -g
```

### Installation

Getting started on running the webpack server to your localhost, localhost:8080

1. Cloning the repository

```sh
git clone git@github.com:JohnFerrancol/photo-tagging-frontend.git
```

2. Installing npm packages

```sh
npm install
```

3. Running the development server

```sh
npm run dev
```

4. Open in web browser via: http://localhost:5173

## Roadmap

- [x] Creating the Home Page
  - [x] Implement the UI to display the available games on the Home Page (/)
  - [x] Fetch and render the game data from the backend through the GET /api/v1/games API endpoint
- [x] Creating the Game Page
  - [x] Implement the UI to display the selected image and the list of characters to find (/games/:gameId)
  - [x] Fetch and render the single game data from the backend through the GET /api/v1/games/:gameId API endpoint
- [x] Creating the Game Session Flow
  - [x] Start the game via the backend through the POST /api/v1/games/:gameId/start API endpoint
  - [x] Track the time on the front end
  - [x] Capture the normalised x and y coordinates of the clicked position and allow the user to select the character from the dropdown
  - [x] Validate user input through the POST /api/v1/games/:gameId/guess endpoint
  - [x] Display the feedback and render markers for found characters and remove them from the dropdown selection
  - [x] Detect in the front end when all characters are found and send the details to the POST /api/v1/games/:gameId/finish API endpoint to upload the entry to the leaderboards
- [x] Creating the Leaderboard Page
  - [x] Implement the UI to display the leaderboard in each game, where the user can select it via a tab group (/leaderboard)
  - [x] Fetch and render the single game leaderboard from the backend through the GET /api/v1/leaderboard/:gameId API endpoint
