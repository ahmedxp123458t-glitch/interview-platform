const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/question');
const interviewRoutes = require('./routes/interview');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/interviews', interviewRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
