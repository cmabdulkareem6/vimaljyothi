# Setting up ExpressJS 
1. Set up nodejs environment as we did in the previous tasks
2. Install express using "npm install express"
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