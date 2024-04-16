function mostrar_productos(){
    $.ajax({
        url: "https://eventify.ieti.site/creation_events_page/",
        type: "POST", // Cambiado a método POST
        headers: {
            "Authorization": "Token d75ebfca0ec3f92c5979a49854718d974127019b"
        },
        data: JSON.stringify(datos), // Convertir datos a formato JSON
        contentType: "application/json", // Establecer tipo de contenido a JSON
        success: mostrarRespuesta, // Manejar respuesta exitosa
        error: function(xhr, status, error) {
            console.error("Error al enviar datos:", error);
        }
    });
}