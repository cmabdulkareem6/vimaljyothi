# Setting up ExpressJS Route Handlers
1. Set up nodejs environment as we did in the previous tasks
2. Install express using "npm install express" as we did in the previous task
3. Open Terminal and type "npm start" to run the index.js file
4. import express in the index.js file 
```
import express from 'express';
```
5. assign imported express function to a variable called app
```
const app = express()
```
6. Create a server, so that it can listen to requests
```
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})
```
7. Create a route handler for the "/" route
```
app.get('/', (req, res)=>{
    res.send("Hello World")
})
```
Open a browser and type http://localhost:3000/ to see the result


9. Create a route handler for the "/about" route
```
app.get('/about', (req, res)=>{
    res.send("This is the about page")
})
```
Open a browser and type http://localhost:3000/about to see the result


10. Create a route handler for the "/register" post request
```
app.post('/register', (req, res)=>{
    res.send("This is the register page")
})
```
Create a post request with REST Client and execute it on http://localhost:3000/register
```
POST http://localhost:3000/register
```
and click on send to test

11. Create a route handler for the "/update" put request
```
app.put('/update', (req, res)=>{
    res.send("This is the update page")
})
```
Create a put request with REST Client and execute it on http://localhost:3000/update
```
PUT http://localhost:3000/update
```
and click on send to test


12. Create a route handler for the "/delete" delete request
```
app.delete('/delete', (req, res)=>{
    res.send("This is the delete page")
})
```
Create a delete request with REST Client and execute it on http://localhost:3000/delete
```
DELETE http://localhost:3000/delete
```
and click on send to test
