async function mostrar_productos() {

    try {
        const response = await fetch('https://localhost:8000/mostrar_productos');
        const productos = await response.json();

        const productosDiv = document.getElementById("productos");
        productos.forEach(producto => {
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


function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

async function mostrar_detalles_productos(id) {

    try {
        const response = await fetch(`https://localhost:8000/mostrar_detalles_producto/${id}`);
        const producto = await response.json();

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

function añadir_producto() {

}
