# Interview Platform

A full-stack MERN application for interview preparation with MCQ tests, coding challenges, mock interviews, analytics, and progress tracking.

## Features

- MCQ Tests with instant scoring and progress tracking
- Coding Challenges with sample solutions
- Mock Interviews with feedback
- Performance Analytics with weak topic detection
- Progress Dashboard with stats

## Architecture Flow

```
Client (React) → localhost:3000
    ↕ HTTP / JSON
Server (Express) → localhost:5000
    ↕ Mongoose ODM
MongoDB → localhost:27017/interview-platform
```

## How to Run

### Server
```bash
cd server
npm install
node seed.js        # Seeds 15 questions
node server.js      # Starts on port 5000
```

### Client
```bash
cd client
npm install
npm start           # Starts on port 3000 (proxied to 5000)
```

Or if using concurrently from root:
```bash
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users | Create a user |
| GET | /api/users | List all users |
| GET | /api/questions?category=&type= | List questions (with filters) |
| POST | /api/questions | Create a question |
| POST | /api/interviews | Create an interview |
| GET | /api/interviews?userId= | List interviews (by user) |

## Usage

- **Dashboard**: Overview of all stats and recent activity
- **MCQ Tests**: Browse and answer multiple choice questions with instant feedback
- **Coding Challenges**: View coding problems with reference solutions
- **Mock Interviews**: Select interview type and receive simulated feedback
- **Analytics**: View performance charts and identify weak topics

## Project Structure

```
interview-platform/
├── server/
│   ├── config/db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Question.js
│   │   └── Interview.js
│   ├── routes/
│   │   ├── user.js
│   │   ├── question.js
│   │   └── interview.js
│   ├── server.js
│   └── seed.js
├── client/
│   ├── public/index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── components/
│   │       ├── Navbar.js
│   │       ├── MCQTest.js
│   │       ├── CodingChallenge.js
│   │       ├── MockInterview.js
│   │       ├── Analytics.js
│   │       └── Dashboard.js
│   └── package.json
├── .gitignore
└── README.md
```
