import express from 'express'
const app = express()

// user defined middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

function auth(req, res, next) {
    const isLoggedIn = true
    if(isLoggedIn){
        next()
    }else{
        res.status(401).send("Unauthorized")
    }
}

app.use(logger)

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/chat", auth, (req, res) => {
    res.status(200).json("User is logged in")
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});