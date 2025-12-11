const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

app.use(cors({
    origin: "https://vinyl-stash.netlify.app",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());   
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'sessions'
    }),
    cookie: { secure: true, httpOnly: true, sameSite: "none", maxAge: 1000 * 60 * 60 * 24 }
}));

app.get('/', (req, res) => {
    res.send('Vinyl Stash Backend is running');
});

//routes
app.use('/api/album', require('./routes/album'));
app.use('/api/search', require('./routes/search'));
app.use('/api/auth', require('./routes/auth'));

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
