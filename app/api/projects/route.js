const { NextResponse } = require("next/server");
const projects = require('../../../json/projects.json');

async function GET() {
  return NextResponse.json(projects);
}

async function POST(request) {
  const body = await request.json();
  console.log(body);

  return NextResponse.json({ id: "new id" });
}

module.exports = { GET, POST };
