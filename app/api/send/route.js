import ContactMeEmail from "../../../components/email"
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(2),
    content: z.string().min(2),
});

export async function POST(req) {
    const { name, email, phone, content } = await req
        .json()
        .then((body) => sendRouteSchema.parse(body));

    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['martinvega170500@gmail.com'],
        subject: `${name} has a message!`,
        react: <ContactMeEmail name={name} email={email} phone={phone} content={content} />,
    });

    return <NextResponse json={{ data, error: null }} status={200} />;
}
