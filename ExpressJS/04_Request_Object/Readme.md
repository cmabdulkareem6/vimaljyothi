# Handling Response object in ExpressJS
1. Set up nodejs environment as we did in the previous tasks
2. Set up express app and server like we did in earlier tasks
3. Open Terminal and type "npm start" to run the index.js file
4. Setup __dirname & __filename variables like we did in earlier tasks for file path
4. Set up router handlers to handle requests and responses
Ex:
```
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
```
5. For any POST request, we can get the incoming data from the client using req.body. By default we cannot create a post request from the browser. instead we can create a post request using REST Client.
In order for us to access the body data, we need to declare `app.use(express.json())` middleware just after the app object declaration.
```
POST http://localhost:3000/register
Content-Type: application/json

{
    "username": "admin",
    "password": "admin"
}
6. For any GET request, we can get the incoming data from the client using req.params if the data is in the URL.
