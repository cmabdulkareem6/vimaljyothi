# Handling Response object in ExpressJS
1. Set up nodejs environment as we did in the previous tasks
2. Set up express app and server like we did in earlier tasks
3. Open Terminal and type "npm start" to run the index.js file
4. Set up router handlers to handle requests and responses
Ex:
```
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.get("/about", (req, res) => {
    res.status(200).json("About Us");
})

app.get("/contact", (req, res) => {
    res.status(200).res.sendFile(path.join(__dirname, "contact.html"));
})

app.get("/offers", (req, res) => {
    res.status(300).res.redirect("/contact");
})
```
* For sending files using path.join(__dirname, "contact.html") we should write following code in the start of the index.js file
```
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```
5. As all above requests are GET requests, we can test them using any browser.