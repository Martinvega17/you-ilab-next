// Importación de la biblioteca mongoose para trabajar con MongoDB
import mongoose from "mongoose";

// Función para conectar a la base de datos
const connectDB = async () => {
    try {
        // Verificar el estado de la conexión a la base de datos
        if (mongoose.connection.readyState === 0) {
            // Conectar a la base de datos utilizando la URL proporcionada en la variable de entorno "MONGODB_URI"
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("db connected"); // Mensaje de confirmación de conexión exitosa
        }
    } catch (error) {
        console.log(error); // Mostrar cualquier error que ocurra durante la conexión
    }
};

// Exportar la función de conexión para su uso en otras partes de la aplicación
export default connectDB;
