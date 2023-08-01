import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getClientIp } from "@supercharge/request-ip";


export async function POST(req) {
  const { name, email, message, terms } = await req.json();
  let ipAddress;


  if (process.env.NODE_ENV === "development") {
    // In development mode, set the IP address to "Unknown"
    ipAddress = "Unknown";
  } else {
    // In production or other environments, get the client's IP address
    ipAddress = getClientIp(req); // Get the client's IP address
  }


  try {
    await connectDB();
    await Contact.create({ name, email, message, terms, ipAddress  });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}