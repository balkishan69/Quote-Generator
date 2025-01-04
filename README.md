# New Tab Quote Generator

## Overview
**New Tab Quote Generator** is a Chrome extension that displays inspiring quotes on your new tab page, sourced from a custom backend API. It enhances the user's browsing experience by delivering a new quote every time the tab is refreshed.
-  Developed a Chrome extension using JavaScript, HTML, and CSS to fetch and display random quotes from a backend API.
- Built a Node.js and Express.js backend server that provides RESTful API endpoints to manage and retrieve quotes.
- Integrated asynchronous data fetching to display quotes on the new tab with error handling for smooth user experience.
- Implemented dynamic UI with a simple, clean design for easy readability and quick loading.

## 🌟 Features

**Quote Display**
- Fetches and displays a new inspirational quote each time you open or refress a new tab.
- Shows both quote text and the author’s name.
- Error handling for loading failure with fallback text.
- Backend Management

**Backend Management**
- RESTful API endpoints to manage quotes (GET, POST, DELETE).
- Persistent storage for quotes on a backend server.

**Responsive Design**
- Mobile-friendly and browser-optimized design for seamless user experience.

**Real-Time Data Fetching**
- Asynchronous data fetching ensures fast loading of quotes without blocking the UI.

**Additional Features**
- Easily add or remove quotes through the API.

## 🚀 Tech Stack
- **Frontend**: HTML, CSS, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: In-memory data storage (MongoDB or other DBs for persistence in production)
- **Asynchronous**: Fetch API
- **Version Control**: Git & GitHub
- **CORS**: Enabling secure communication between frontend and backend



## 📦 Installation

### Backend Setup (Node.js & Express)
1. Clone this repository to your local machine.
   ```bash
   git clone <repo-link>
   
2. Navigate to the project directory and install required dependencies:
    ```bash
    cd <repository-name>
    npm install
    
3. Run the backend server locally:
   ```bash
   npm start
   
The server will be accessible at http://localhost:5000 for local testing.

### Chrome Extension Setup
1.  Open Chrome Browser and go to chrome://extensions/.
2. Enable Developer Mode using the toggle at the top right.
3. Click on Load unpacked and select the extension folder inside the cloned repository.
4. The extension will now be available, and every time you open a new tab, it will display a random quote.

## API Endpoints
- GET /api/quotes: Fetches all available quotes.
- GET /api/quotes/:id: Fetches a single quote by its ID.
- POST /api/quotes: Adds a new quote to the database.
- DELETE /api/quotes/:id: Deletes a quote by its ID.

## 🤝 Contributing
Contributions are welcome! Feel free to submit a Pull Request with improvements or new features.
