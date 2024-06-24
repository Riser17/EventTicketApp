# Event Management Backend

This is the backend for the Event Management Application, built with Node.js, Express, and MongoDB. It provides RESTful APIs to manage events, including creating, updating, fetching, and deleting event records.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

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
   MONGO_URI=your_mongodb_uri
   ```

## API Endpoints

### Event Routes

- GET /api/v1/events
  Fetch all events.
   
