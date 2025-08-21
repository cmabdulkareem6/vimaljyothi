import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const PORT = 3000;

app.use(express.json())

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Request parameters
app.get("/users/:user", (req, res) => {
    const user = req.params.user;
    res.status(200).sendFile(path.join(__dirname, `${user}.html`))
})

// Request IP
app.get("/", (req, res) => {
    res.status(200).json(`You are accessing the page from ${req.ip}`);
});

// Request body : incoming data from the client should be converted to JS object
// using app.use(express.json()) or app.use(express.urlencoded()) middleware
app.post("/register", (req, res) => {
    const {username, password } = req.body;
    res.status(200).json({ username, password });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});