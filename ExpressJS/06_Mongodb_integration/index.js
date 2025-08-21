import express from 'express';
import mongoose from 'mongoose';    // 'npm i mongoose' to install
const app = express();

app.use(express.urlencoded());
app.use(express.json());

// Connect to MongoDB using mongodb connection string
// then to do what we want after successful connection
// catch means what to do if connection fails
mongoose.connect('mongodb://localhost:27017/testDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

// Create a schema for expected data from frontend
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create a model for the schema
const User = mongoose.model('User', userSchema);


// LET'S DO CRUD OPERATIONS
// -------------------------//

// Create a new user (Create operation)
app.post("/register", (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    User.create({ name, email, password })
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});


// Read all users (Read operation)
app.get("/users", (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// Update a user by their name (Update operation)
app.put("/users/:name", (req, res) => {
    const { name } = req.params;
    const { email, password } = req.body;

    User.findOneAndUpdate({ name }, { email, password }, { new: true })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});


// Delete a user by their name (Delete operation)
app.delete("/users/:name", (req, res) => {
    const { name } = req.params;

    User.findOneAndDelete({ name })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});