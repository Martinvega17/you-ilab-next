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
                user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
            }
        })

        const mailOption = {
            from: 'martinvega170500@gmail.com',
            to: 'martinvega0313@gmail.com',
            cc: process.env.NEXT_PUBLIC_CC_EMAIL, 
            replyTo: email,
            subject: "Send Email Tutorial",
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}