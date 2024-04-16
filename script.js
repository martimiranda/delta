function mostrar_productos() {
    fetchData('https://localhost:8000/mostrar_productos')
        .then(data => {
            console.log('Datos recibidos:', data);
            var id = data.id;
            var nombre = data.nombre;
            var descripcion = data.descripcion;
            var precio = data.precio;


        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
        });
}



// Función para eliminar un producto
async function borrar_producto(id) {
    try {
        const response = await fetch('https://localhost:8000/borrar_producto' + id, {
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

function mostrar_detalles_productos() {
    fetchData('https://localhost:8000/mostrar_detalles_producto')
        .then(data => {
            console.log('Datos recibidos:', data);

        })
        .catch(error => {
            console.error('Hubo un error al obtener los datos:', error);
        });
}

function añadir_producto() {

}

// Función para cerrar los detalles del producto
function cerrarDetalle() {
    document.getElementById("detalle-producto").style.display = "none";
}