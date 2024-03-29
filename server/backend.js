const express = require("express");
// const cors = require("cors");
const { default: mongoose } = require("mongoose");
const path=require('path');
const PORT = process.env.PORT || 9002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cors());"mongodb+srv://Anoop:9wT2owazxfmKuqDo@cluster0.tce623z.mongodb.net/?retryWrites=true&w=majority"
//localhost-->>////////////     'mongodb://localhost:27017/myFoodysiteLoginRegisterDB'
mongoose.connect("mongodb+srv://Anoop:9wT2owazxfmKuqDo@cluster0.tce623z.mongodb.net/foodysiteDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected");
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    feedback: String,
    userRecipe: String
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull, welcome to Savehungry", user: user });
            } else {
                res.send({ message: "Incorrect password" });
            }
        } else {
            res.send({ message: "User not registered", user: {} });
        }
    });
});

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" });
        } else {
            const user = new User({
                name: name,
                email: email,
                password: password,
                feedback: "",
                userRecipe: ""
            });
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            });
        }
    });

});

app.post("/feedback", (req, res) => {
    const { userFeedback, currentUser } = req.body;
    // console.log(req.body);
    // console.log(userFeedback);
    User.findOne({ email: currentUser.email }, (err, user) => {
        if (user) {
            user.feedback = userFeedback;
            user.save(error => {
                if (error) {
                    res.send({ message: error });
                } else {
                    res.send({ message: "Your feedback submitted successfully.", user: user });
                    // console.log(user);
                }
            });
        }
        else {
            res.send({ message: err });
        }
    });
});

app.post("/add-recipe", (req, res) => {
    const { userRecipe, currentUser } = req.body;
    // console.log(req.body);
    // console.log(userRecipe);
    User.findOne({ email: currentUser.email }, (err, user) => {
        if (user) {
            user.userRecipe = userRecipe;
            user.save(error => {
                if (error) {
                    res.send({ message: error });
                } else {
                    res.send({ message: "Your recipe submitted successfully.", user: user });
                    // console.log(user);
                }
            });
        }
        else {
            res.send({ message: err });
        }
    });
});

const buildPath=path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.listen(PORT, () => {
    console.log("server started on port: ", PORT);
});