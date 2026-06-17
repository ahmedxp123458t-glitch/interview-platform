const mongoose = require('mongoose');
const Question = require('./models/Question');

const mcqQuestions = [
  { type: 'mcq', category: 'JavaScript', question: 'What is the typeof null?', options: ['object', 'null', 'undefined', 'boolean'], correctAnswer: 'object', difficulty: 'easy' },
  { type: 'mcq', category: 'JavaScript', question: 'Which method adds an element to the end of an array?', options: ['push', 'pop', 'shift', 'unshift'], correctAnswer: 'push', difficulty: 'easy' },
  { type: 'mcq', category: 'React', question: 'What hook is used for side effects?', options: ['useState', 'useEffect', 'useContext', 'useReducer'], correctAnswer: 'useEffect', difficulty: 'easy' },
  { type: 'mcq', category: 'React', question: 'What is JSX?', options: ['JavaScript XML', 'Java Syntax', 'JSON XML', 'None'], correctAnswer: 'JavaScript XML', difficulty: 'easy' },
  { type: 'mcq', category: 'Node.js', question: 'Which module handles HTTP?', options: ['http', 'fs', 'path', 'os'], correctAnswer: 'http', difficulty: 'easy' },
  { type: 'mcq', category: 'MongoDB', question: 'Which command shows all databases?', options: ['show dbs', 'list dbs', 'display dbs', 'get dbs'], correctAnswer: 'show dbs', difficulty: 'medium' },
  { type: 'mcq', category: 'JavaScript', question: 'What does === compare?', options: ['Value only', 'Type only', 'Value and type', 'Reference'], correctAnswer: 'Value and type', difficulty: 'medium' },
  { type: 'mcq', category: 'React', question: 'What is used to pass data to a component?', options: ['props', 'state', 'store', 'refs'], correctAnswer: 'props', difficulty: 'easy' },
  { type: 'mcq', category: 'Node.js', question: 'What is middleware in Express?', options: ['Functions', 'Routes', 'Models', 'Views'], correctAnswer: 'Functions', difficulty: 'medium' },
  { type: 'mcq', category: 'MongoDB', question: 'What is a document in MongoDB?', options: ['Row', 'Record', 'JSON object', 'Table'], correctAnswer: 'JSON object', difficulty: 'medium' }
];

const codingQuestions = [
  { type: 'coding', category: 'JavaScript', question: 'Write a function to reverse a string', options: [], correctAnswer: 'function reverse(str){return str.split("").reverse().join("");}', difficulty: 'easy' },
  { type: 'coding', category: 'JavaScript', question: 'Write a function to check if a string is a palindrome', options: [], correctAnswer: 'function isPalindrome(str){return str===str.split("").reverse().join("");}', difficulty: 'easy' },
  { type: 'coding', category: 'JavaScript', question: 'Write a function to find the factorial of a number', options: [], correctAnswer: 'function fact(n){return n<=1?1:n*fact(n-1);}', difficulty: 'medium' },
  { type: 'coding', category: 'JavaScript', question: 'Write a function to find the maximum element in an array', options: [], correctAnswer: 'function max(arr){return Math.max(...arr);}', difficulty: 'easy' },
  { type: 'coding', category: 'JavaScript', question: 'Write a function to merge two sorted arrays', options: [], correctAnswer: 'function merge(a,b){return [...a,...b].sort();}', difficulty: 'medium' }
];

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/interview-platform');
    await Question.deleteMany({});
    await Question.insertMany([...mcqQuestions, ...codingQuestions]);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

seedDB();
