// Este archivo se encarga de cargar los mensajes del archivo JSON

// Importamos el archivo JSON
import messages from "../json/avisos.json";

// Creamos una variable para almacenar los mensajes
const messagesArray = messages;

// Creamos una función para mostrar los mensajes
function showMessages() {
    // Recorremos el array de mensajes
    for (const message of messagesArray) {
        // Mostramos cada mensaje
        document.getElementById("noticias").innerHTML += `<li class='mt-2'>${message.message}</li><hr>`;
    }
}
alert('AAAAAA')
// Llamamos a la función para mostrar los mensajes
showMessages();

