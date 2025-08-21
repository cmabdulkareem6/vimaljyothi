import express from 'express'
const app = express()

// this is a function we can call as middleware in any route
// next() is used to pass the request to the route handler
// if no next() is called, the request will not go to the route handler
function logger(req, res, next) {
    console.log(`${req.ip} ${req.url}`);
    next();
}

// global middleware (applied to all routes after this middleware)
// in this case if the user try to access a route a log record will be consoled
app.use(logger);

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// this is a function we can call as middleware in any route
// if no next() is called, the request will not go to the route handler
// this is a middleware that checks if the user is logged in
function auth(req, res, next) {
    const isLoggedIn = true;
    if (isLoggedIn) {
        next();
    }
    return res.status(401).json("Unauthorized");
}

// we can pass above middleware to a specific route
// this is a middleware that checks if the user is logged in
// then passes the request to the "/chat" route
app.get("/chat", auth, (req, res) => {
    res.status(200).json("User is logged in")
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
});