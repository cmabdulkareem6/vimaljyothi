# Handling Response Object in ExpressJS  

This project demonstrates how to use the `Response` object in ExpressJS to send different types of responses to the client.  

---

## Steps to Run  

1. **Set up Node.js environment**  
   - Install [Node.js](https://nodejs.org/) if not already installed.  
   - Create a new project folder and initialize it with:  
     ```bash
     npm init -y
     ```  

2. **Set up Express app and server**  
   - Install Express:  
     ```bash
     npm install express
     ```  
   - Create a file named `index.js`.  

3. **Start the server**  
   - Open the terminal and run:  
     ```bash
     npm start
     ```  
   (Make sure you have `"start": "node index.js"` in your `package.json` scripts.)  

4. **Set up route handlers to handle requests and responses**  

   Example routes:  

   ```js
   import express from 'express';
   import path, { dirname } from 'path';
   import { fileURLToPath } from 'url';

   // Create __dirname
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = dirname(__filename);

   const app = express();
   const PORT = 3000;

   // Route handler with res.status and res.send
   app.get("/", (req, res) => {
       res.status(200).send("Hello World");
   });

   // Route handler with res.status and res.json
   app.get("/about", (req, res) => {
       res.status(200).json("About Us");
   });

   // Route handler with res.status and res.sendFile
   app.get("/contact", (req, res) => {
       res.status(200).sendFile(path.join(__dirname, "contact.html"));
   });

   // Route handler with res.status and res.redirect
   app.get("/offers", (req, res) => {
       res.status(300).redirect("/contact");
   });

   // Start server
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

---

## Important Notes  

- For sending files using `path.join(__dirname, "contact.html")`, you must import `path` at the start of the file:  
  ```js
  import path from 'path';
  ```
- As all above requests are **GET requests**, you can test them directly using any browser by navigating to:  
  - `http://localhost:3000/` → Hello World  
  - `http://localhost:3000/about` → JSON response  
  - `http://localhost:3000/contact` → HTML file  
  - `http://localhost:3000/offers` → Redirects to `/contact`  
  - `http://localhost:3000/invalid` → Error response (404)
