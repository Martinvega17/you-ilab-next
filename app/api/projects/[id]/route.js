const { NextResponse } = require("next/server");
const projects = require('../../../../json/projects.json');

async function GET(request, { params }) {
    const id = params.id; // Obtén el id de los parámetros
    const project = projects.find((p) => p.id.toString() === id);
    if (project) {
        return NextResponse.json(project);
    } else {
        return NextResponse.json({ error: "Proyecto no encontrado" }, { status: 404 });
    }
}

async function DELETE(request, { params }) {
    console.log("DELETE", params.id);
    return NextResponse.json({ success: true });
}

async function PATCH(request, { params }) {
    console.log("PATCH", params.id);
    return NextResponse.json({ success: true });
}

module.exports = {
    GET,
    DELETE,
    PATCH
};
