import express from 'express';
const app = express();

// Define port
const PORT = 3000;

// Route Handlers
// 1. Home route (GET /)
app.get('/', (req, res) => {
    console.log("/ route called");
});

// 2. About route (GET /about)
app.get('/about', (req, res) => {
    console.log("/about route called");
});

// 3. Register route (POST /register)
app.post('/register', (req, res) => {
    console.log("/register route called");
});

// 4. Update route (PUT /update)
app.put('/update', (req, res) => {
    console.log("/update route called");
});

// 5. Delete route (DELETE /delete)
app.delete('/delete', (req, res) => {
    console.log("/delete route called");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
