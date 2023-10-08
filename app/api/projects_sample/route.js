import { NextResponse } from "next/server";

export async function GET(request) {
    const data = [
        {
            "id": 1,
            "img": "https://static.chollometro.com/threads/raw/default/681071_1/re/300x300/qt/60/681071_1.jpg",
            "description": "PUMA Rebel Mujer Sudadera con capucha 584862-02 Marca: PUMA Material: 68% algodón, 32% poliéster pretina: 98% algodón, 2% elastano Forro de la capucha: 100% algodón Logotipo de la … Leer más",
            "title": "Centinela del Aire"
        },
        {
            "id": 2,
            "img": "https://static.chollometro.com/threads/raw/default/680775_2/re/300x300/qt/60/680775_2.jpg",
            "description": "POCO F3 5G,versión de 8GB + 256GB a 265.99€ usando el código y el cupón descuento del vendedor. ESPECIFICACIONES Pantalla: 6.67 FHD+ (386 ppi) Amoled Gorilla Procesador: Snap… Leer más",
            "title": "WeNet Mexico"
        },
        {
            "id": 3,
            "img": "https://static.chollometro.com/threads/raw/default/681132_1/re/300x300/qt/60/681132_1.jpg",
            "description": "Buen precio con gastos de envío gratis para estos packs de 100 mascarillas higiénicas. No necesitan mucha presentación son las típicas que usamos no reutilizables. Disponibles … Leer más",
            "title": "Centinela de la Salud"
        },
        {
            "id": 4,
            "img": "https://static.chollometro.com/threads/raw/default/680411_1/re/300x300/qt/60/680411_1.jpg",
            "description": "Game también pone en oferta una de las consolas más populares del momento, la Xbox Series S, tenemos la posibilidad de recoger en tienda de forma gratuita. Además, por la compra t… Leer más",
            "title": "C-SEF"
        },
        {
            "id": 5,
            "img": "https://static.chollometro.com/threads/raw/default/674455_3/re/300x300/qt/60/674455_3.jpg",
            "description": "Con motivo del CyberMonday en la web oficial de Fossil tenemos un código descuento EXTRA del 40% que podemos aplicar a una buena la selección de Outlet, pero es que además es a… Leer más",
            "title": "Muframex"
        },
        {
            "id": 6,
            "img": "https://static.chollometro.com/threads/raw/default/680724_2/re/300x300/qt/60/680724_2.jpg",
            "description": "¡Ya está aquí el Black Friday de Nike! 25 % EXTRA en toda la web* incluido lo ya rebajado al aplicar el código GAME21 y además ENVÍO GRATIS ✅ *Se aplican excepciones … Leer más",
            "title": "Horizonte Saludable"
        },
        {
            "id": 9,
            "img": "https://static.chollometro.com/threads/raw/default/680741_1/re/300x300/qt/60/680741_1.jpg",
            "description": "Preciazo en mediamarkt con motivo del black friday ;) Notas del Equipo Editorial Pocos smartwatch son tan completos y ambiciosos como los de Apple y para finales de 2021 y ca… Leer más",
            "title": "Juventud al Dia"
        },
        {
            "id": 10,
            "img": "https://static.chollometro.com/threads/raw/default/680689_2/re/300x300/qt/60/680689_2.jpg",
            "description": "Preciazo para la ultima band de Xiaomi, la 6 con sensores mejorados y una pantalla OLED de 1,56. Cuenta con múltiples funciones como control menstrual femenino y medición SpO2 y 3… Leer más",
            "title": "Coincidencia Digital"
        },
        {
            "id": 11,
            "img": "https://static.chollometro.com/threads/raw/default/657611_3/re/300x300/qt/60/657611_3.jpg",
            "description": "Si falla usad este AEBF43 Preciazo para la nueva TV de Xiaomi, la P1, un modelo lanzado este mismo año. Con diseño Zero Frame, compatible con HDR10+ resolución UHD 4K y asistente d… Leer más",
            "title": "Urbis"
        },
        {
            "id": 14,
            "img": "https://static.chollometro.com/threads/raw/default/680656_1/re/300x300/qt/60/680656_1.jpg",
            "description": "https://www.zalando.es/hollister-co-5-pack-culotte-bordeauxgreyred-h0482o02g-g11.html Material exterior: 95% algodón, 5% elastano Material/composición: Jersey",
            "title": "SieNi - PCWO"
        },
        {
            "id": 15,
            "img": "https://static.chollometro.com/threads/raw/default/679950_1/re/300x300/qt/60/679950_1.jpg",
            "description": "ESTE CHOLLO ES PARA RUNNERS , CICLISTAS ( podeis engañar pues nadie va a verificar si habeis ido corriendo , volando, en bici, o llevaba el movil el perro , o un dron,...) Y GENTE … Leer más",
            "title": "Beyond the Street"
        },
        {
            "id": 16,
            "img": "https://static.chollometro.com/threads/raw/default/679950_1/re/300x300/qt/60/679950_1.jpg",
            "description": "ESTE CHOLLO ES PARA RUNNERS , CICLISTAS ( podeis engañar pues nadie va a verificar si habeis ido corriendo , volando, en bici, o llevaba el movil el perro , o un dron,...) Y GENTE … Leer más",
            "title": "Mi Casa es su Casa"

        },
        {
            "id": 17,
            "img": "https://static.chollometro.com/threads/raw/default/679950_1/re/300x300/qt/60/679950_1.jpg",
            "description": "ESTE CHOLLO ES PARA RUNNERS , CICLISTAS ( podeis engañar pues nadie va a verificar si habeis ido corriendo , volando, en bici, o llevaba el movil el perro , o un dron,...) Y GENTE … Leer más",
            "title": "Environmental Restoration Perception"

        }
    ];

    return NextResponse.json(data);
}
