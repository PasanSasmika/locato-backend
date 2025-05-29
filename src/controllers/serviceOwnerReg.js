import bcrypt from "bcrypt"
import User from "../models/usersModel.js";


export function serviceOwnerRegistration(req, res) {
    const newUserData = req.body;

    User.findOne({ email: newUserData.email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ message: "A user with this email already exists." });
            }

            newUserData.password = bcrypt.hashSync(newUserData.password, 10);

            const user = new User(newUserData);

            user.save()
                .then(() => {
                    res.status(201).json({ message: "Service Owner Registration successful" });
                })
                .catch(err => {
                    console.error("Error creating user:", err);
                    res.status(500).json({ message: "Service Owne not created", error: err });
                });
        })
        .catch(err => {
            console.error("Error checking email:", err);
            res.status(500).json({ message: "Error occurred while checking email", error: err });
        });
}