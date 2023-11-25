
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        const transporter = nodemailer.createTransport({

            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }
        })

        const mailOption = {
            from: 'You I Lab <martinvega170500@gmail.com>',
            to: process.env.NODEMAILER_EMAIL,
            cc: process.env.NODEMAILER_CC, 
            subject: "You I Lab",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #092843;">Contact Form Submission</h2>
                <p style="font-size: 16px;">Name: ${name}</p>
                <p style="font-size: 16px;">Email: ${email}</p>
                <p style="font-size: 16px;">Phone: ${phone}</p>
                <p style="font-size: 16px;">Message: ${message}</p>
            </div>
        `,
        };

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
    
}