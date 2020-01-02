const express = require('express');
const connectDB = require('./config/db');

const app = express();

//database connection
connectDB();

//middleware
app.use(express.json({
    extended: false
}))

app.get('/', (req, res) =>
    res.send('API running')
);

//routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})