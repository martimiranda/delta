
window.onload = function() {
    mostrar_productos();
}
async function mostrar_productos() {

    try {
        const response = await fetch('http://localhost:8000/mostrar_productos/');
        const productos = await response.json();

        const productosDiv = document.getElementById("productos");
        productos.productos.forEach(producto => {
            const productoDiv = document.createElement("div");
            productoDiv.innerHTML = `<p>${producto.nombre}</p>`;
            productoDiv.addEventListener("click", () => mostrar_detalles_productos(producto.id));
            productosDiv.appendChild(productoDiv);
        });
    } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
    }
}



// Función para eliminar un producto
async function borrar_producto(id) {
    try {
        const response = await fetch('http://localhost:8000/borrar_producto/' + id, {
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

async function mostrar_detalles_productos(id) {

            try {
                const response = await fetch(`http://localhost:8000/mostrar_detalle_producto/${id}/`);
                const producto = await response.json();
                console.log(producto);
                const detalleDiv = document.getElementById("detalle-info");
                detalleDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${producto.nombre}</p>
            <p><strong>Descripción:</strong> ${producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
        `;

                document.getElementById("detalle-producto").style.display = "block";
            } catch (error) {
                console.error("Error al obtener los detalles del producto:", error);
            }
        }





// Función para cerrar los detalles del producto
function cerrarDetalle() {
    document.getElementById("detalle-producto").style.display = "none";
}

function mostrarForm() {
    const formulario = document.getElementById("formulario");
    formulario.style.display = "block";
}