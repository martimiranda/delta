function mostrar_productos() {
    $.ajax({
        url: "https://eventify.ieti.site/creation_events_page/",
        type: "POST", // Cambiado a método POST
        headers: {
            "Authorization": "Token d75ebfca0ec3f92c5979a49854718d974127019b"
        },
        data: JSON.stringify(datos), // Convertir datos a formato JSON
        contentType: "application/json", // Establecer tipo de contenido a JSON
        success: mostrarRespuesta, // Manejar respuesta exitosa
        error: function (xhr, status, error) {
            console.error("Error al enviar datos:", error);
        }
    });
}



// Función para eliminar un producto
async function eliminar_producto(id) {
    try {
        const response = await fetch('', {
            method: "DELETE"
        });
        if (response.ok) {
            console.log("Producto eliminado correctamente");
            // Actualizar la lista de productos después de eliminar uno
            document.getElementById("productos").innerHTML = "";
            mostrar_productos();
        } else {
            console.error("Error al eliminar el producto:", response.statusText);
        }
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
}