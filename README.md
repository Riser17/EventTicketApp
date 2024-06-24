# Event Management Backend

This is the backend for the Event Management Application, built with Node.js, Express, and MongoDB. It provides RESTful APIs to manage events, including fetching all event records.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/event-management-backend.git
   cd event-management-backend
   ```
1. **Install dependencies**

   ```bash
   npm install
   ```
1. **Set up environment variables**
   Create a .env file in the root directory and add the following variables:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_uri // mongodb atlas link
   ```

## Project Structure

```
event-management-backend/
├── config/
│   └── db.js          # Database connection configuration
├── controllers/
│   └── eventController.js  # Event controller functions
├── modals/
│   └── Event.js       # Event model schema
├── routes/
│   └── eventRoutes.js # Event routes
├── services/
│   └── eventService.js# Event service functions
├── .env               # Environment variables
├── index.js           # Main application file
├── package.json       # Node package manager configuration
└── README.md          # Project documentation
```

## API Endpoints

### Event Routes

- GET /api/v1/events
  Fetch all events.
   
