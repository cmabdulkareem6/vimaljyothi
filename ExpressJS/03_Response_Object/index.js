import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Creating __dirname and __filename to get the path of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Route handler with res.status and res.send
// res.status 200 sets the success HTTP status code to frontend
// res.send sends the response as a plain text to frontend
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});


// Route handler with res.status and res.json
// res.status 200 sets the success HTTP status code to frontend
// res.json sends the response as a JSON object to frontend
app.get("/about", (req, res) => {
    res.status(200).json({ message: "About Us" });
});

app.get("/contact", (req, res) => {
    res.status(200).json({ message: "Contact Us" });
});


// Route handler with res.status and res.redirect
// res.status 302 sets the redirect HTTP status code (when user is redirected)
// res.redirect sends the response as a redirect to frontend
app.get("/careers", (req, res) => {
    res.redirect(302, "/contact");
});


// Route handler with res.status and res.redirect
// res.status 302 sets the redirect HTTP status code
// res.redirect sends the response as a redirect to frontend
app.get("/offers", (req, res) => {
    res.redirect(302, "/notexisting");
});


// res.status 404 sets the not found HTTP status code
// res.sendFile sends the response as a html file to frontend
// this should be the last route handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "error404.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
