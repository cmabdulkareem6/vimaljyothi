import express from 'express';
const app = express();

// req.url returns the url of the request
// req.ip returns the ip of the client (frontend)
// req.headers returns the headers of the request
app.get("/", (req, res) => {
    console.log(req.url);
    console.log(req.ip);
    console.log(req.headers);
    res.status(200).send("Hello World");
})


// req.params.page returns whatever is in the place of :page
// this is called dynamic routing where the request is dynamically generated
app.get("/dynamicpage/:page", (req, res) => {
    console.log(req.params.page);
    res.status(200).send(`You are on page ${req.params.page}`);
})


// req.body returns the form data from the frontend
// we need to use app.use(express.urlencoded()) and app.use(express.json()) to parse the form data
/* 
to test, we should create a form with method="post" in the frontend, with action="http://localhost:3000/register"

OR

initiate a POSTMAN request -> set method to POST -> set url to http://localhost:3000/register
-> set body to x-www-form-urlencoded -> provide keys and values for data and click send
*/
app.use(express.urlencoded());
app.use(express.json());
app.post("/register", (req, res) => {
    console.log(req.body);
    res.status(200).send("User registered");
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});