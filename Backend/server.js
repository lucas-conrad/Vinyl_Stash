const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


const app = express();



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

const store = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions'
});

store.on('error', function(error) {
    console.log(error);
});

app.use(express.json());   
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
    store: store
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
