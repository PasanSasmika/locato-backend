import User from "../models/usersModel.js"
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config();

export function creatAdmin(req,res){

const newUserData = req.body


if(newUserData.type == "admin"){

    if(req.user==null){
        res.json({
            message: "You are not loged in. plese log in as an admin to create admin account"
        })
        return
    }

    if(req.user.type !="admin"){
        res.json({
            message: "You are not an admin. plese log in as an admin"
        })
    }
}


newUserData.password = bcrypt.hashSync(newUserData.password, 10)


const user  = new User(newUserData)

user.save().then(()=>{
    res.json({
        message: "User created"
    })
}).catch(()=>{
    res.json({
        message: "User not created"
    })
})

}



export function createCustomer(req, res) {
    const newUserData = req.body;

    User.findOne({ email: newUserData.email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ message: "A user with this email already exists." });
            }

            newUserData.password = bcrypt.hashSync(newUserData.password, 10);

            const user = new User(newUserData);

            user.save()
                .then(savedUser => {
                    const token = jwt.sign({
                        email: savedUser.email,
                        firstName: savedUser.firstName,
                        lastName: savedUser.lastName,
                        isBlocked: savedUser.isBlocked,
                        type: savedUser.type,
                        profilepic: savedUser.profilepic
                    }, process.env.SECRET);

                    res.status(201).json({
                        message: "Registration successful",
                        token: token,
                        user: {
                             _id: savedUser._id,
                            firstName: savedUser.firstName,
                            lastName: savedUser.lastName,
                            email: savedUser.email,
                            profilepic: savedUser.profilepic,
                            type: savedUser.type
                        }
                    });
                })
                .catch(err => {
                    console.error("Error creating user:", err);
                    res.status(500).json({ message: "Customer user not created", error: err });
                });
        })
        .catch(err => {
            console.error("Error checking email:", err);
            res.status(500).json({ message: "Error occurred while checking email", error: err });
        });
}



export function loginUser(req,res){

    User.find({email: req.body.email}).then(
        (users)=>{
            if(users.length == 0){
                res.json({
                    message: "User not found"
                })
            }else {

                const user = users[0]

               const isPasswordCorrect =  bcrypt.compareSync(req.body.password, user.password)

               if(isPasswordCorrect){
                const token = jwt.sign({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    isBlocked: user.isBlocked,
                    type: user.type,
                    profilepic: user.profilepic
                }, process.env.SECRET)
                    res.json({
                        message: "Logged in successful",
                        token: token,
                        user: {
                             _id: user._id,
                            firstName : user.firstName,
                            lastName : user.lastName,
                            email: user.email,
                            profilepic: user.profilepic,
                            type : user.type
                        }
                    })

               }else{
                res.json({
                    message: "Your Password Is not correct"
                })
               }
            }
        }
    )
}