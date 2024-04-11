
import { NextResponse } from 'next/server';

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.google.com",
    port: process.env.NODEMAILER_PORT || 465,
    secure: process.env.NODEMAILER_SECURE || true, // Use `true` for port 465
    auth: {
        user: process.env.NODEMAILER_USERNAME || "sarah.sh.studios@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD || "zuuj fwrj lzhd gmnb",
    },
});

type ResponseData = {
    status?: string;
    message?: string;
};

export async function POST(request: Request) {


    let response = {};
    const body = await request.json();

    return NextResponse.json(response);
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: body.email, // sender address
        to: "sarah.sh.studios@gmail.com", // list of receivers
        subject: `My vercel contact: ${body.name}`, // Subject line
        text: body.message, // plain text body
        html: `<b>${body.message}</b>`, // html body
    });
}

