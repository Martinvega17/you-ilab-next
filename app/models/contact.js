// Importación de la biblioteca mongoose para trabajar con MongoDB y el objeto Schema
import mongoose, { Schema } from "mongoose";

// Definición del esquema de datos para la colección "contacts"
const contactSchema = new Schema({
    // Campo "name": Nombre del contacto
    name: {
        type: String,
        required: [true, "Name is required."], // Se requiere el nombre
        trim: true, // Se eliminan espacios en blanco al principio y al final
        minLength: [2, "Name must be larger than 2 characters"], // Mínimo 2 caracteres
        maxLength: [50, "Name must be lesser than 50 characters"], // Máximo 50 caracteres
    },

    // Campo "email": Correo electrónico del contacto
    email: {
        type: String,
        required: [true, "Email is required."], // Se requiere el correo electrónico
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"], // Patrón de correo electrónico válido
    },

    // Campo "message": Mensaje del contacto
    message: {
        type: String,
        required: [true, "Message is required."], // Se requiere el mensaje
    },

    // Campo "terms": Términos y condiciones
    terms: {
        type: String,
        required: [true, "Terms and service is required."], // Se requieren los términos y condiciones
    },

    // Campo "ipAddress": Dirección IP del contacto
    ipAddress: {
        type: String,
        default: "Unknown", // Valor predeterminado si no se proporciona
    },

    // Campo "date": Fecha de creación del documento
    date: {
        type: Date,
        default: Date.now, // Valor predeterminado: fecha y hora actual
    },
});

// Definición del modelo "Contact" basado en el esquema "contactSchema"
const Contact =
    mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// Exportación del modelo "Contact" para su uso en otras partes de la aplicación
export default Contact;
