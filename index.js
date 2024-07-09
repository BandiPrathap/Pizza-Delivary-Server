const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { LocalStorage } = require("node-localstorage");
const dotenv = require('dotenv');
const jwtoken = require('jsonwebtoken');

dotenv.config();
const localStorage = new LocalStorage('./scratch');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const Users=[];
// Registration 
app.post('/register',async (req , res)=>{
    try{
        const {username , email ,password , mobileNo , address} = req.body;
        const hashPassword = await bcrypt.hash(password , 10);

        const user ={
            username : username,
            email : email,
            password : hashPassword,
            mobileNo : mobileNo,
            address : address
        }
        Users.push(user);
        localStorage.setItem('Users' , JSON.stringify(Users));

        res.status(201).json({message :"account successfully created"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: 'An error occurred while creating the user' });
    }    
})

//Login
app.post("/login", async (req, res) => {
    try{
        const { username, password } = req.body;

        const users = JSON.parse(localStorage.getItem('Users'));
        const user = users.find(data => data.email === username);

        const isPasswordMatched=await bcrypt.compare(password,user.password);

        if(user){
            if(isPasswordMatched){
                const jwtsecretkey =process.env.JWT_SECRET_KEY;
                const token = jwtoken.sign(user,jwtsecretkey);
                res.json({token});
            }
            else{
                res.json({message : "password is not matched"})
            }
        }
        else{
            res.json({message : "there is no account with this details"});
        }

    }
    catch(error){
        res.status(404).json({Message : error});
    }
 
    
});

const PORT = 5001;
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server successfully created on port ${PORT}`);
    } else {
        console.log("Server not created", err);
    }
});
