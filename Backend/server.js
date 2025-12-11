const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

app.get('/', (req, res) => {
    res.send('Vinyl Stash Backend is running');
});

app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
    allowedHeaders: ['Content-Type']
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.json());   
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'sessions'
    }),
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }
}));


//routes
app.use('/api/album', require('./routes/album'));
app.use('/api/search', require('./routes/search'));
app.use('/api/auth', require('./routes/auth'));

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
