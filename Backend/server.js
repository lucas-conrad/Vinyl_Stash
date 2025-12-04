const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const albumRoutes = require('./routes/album');

const app = express();

app.use(cors());
app.use(express.json());   
connectDB();

app.use('/api/album/collection', albumRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
