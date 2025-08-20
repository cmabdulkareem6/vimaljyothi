// index.js

import express from 'express';

// Create app
const app = express();

// Define port
const PORT = 3000;

// Route Handlers

// 1. Home route (GET /)
app.get('/', (req, res) => {
    res.send("Hello World");
});

// 2. About route (GET /about)
app.get('/about', (req, res) => {
    res.send("This is the about page");
});

// 3. Register route (POST /register)
app.post('/register', (req, res) => {
    res.send("This is the register page");
});

// 4. Update route (PUT /update)
app.put('/update', (req, res) => {
    res.send("This is the update page");
});

// 5. Delete route (DELETE /delete)
app.delete('/delete', (req, res) => {
    res.send("This is the delete page");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
