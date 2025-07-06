import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const mailService = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
    tls:{
        rejectUnauthorized: false 
    },
    connectionTimeout:10000,
    socketTimeout:10000,
});