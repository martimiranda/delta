function mostrar_productos(){
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

function mostrar_detalles_productos(){
    fetchData('https://localhost:8000/mostrar_detalles_producto')
    .then(data => {
      console.log('Datos recibidos:', data);
      
    })
    .catch(error => {
      console.error('Hubo un error al obtener los datos:', error);
    });
}

function añadir_producto(){

}

function borrar_producto(){
    
}

  