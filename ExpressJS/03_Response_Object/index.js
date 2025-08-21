import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const PORT = 3000;

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/about", (req, res) => {
    res.status(200).json("About Us");
});

app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "contact.html"));
});

app.get("/offers", (req, res) => {
    res.status(300).redirect("/contact");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});