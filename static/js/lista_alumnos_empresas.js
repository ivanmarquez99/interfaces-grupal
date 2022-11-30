//FUNCION PARA AGREGAR FILAS
const agregarFila = () => {
    document.getElementById('tabla_alumnos').insertRow(-1).innerHTML = '<td><input type="text" size="10"></td><td><input type="text" size="10"></td><td><input type="text" size="11"></td><td><input type="text" size="10"></td><td><input class="correo" type="text" size="10"></td><td><button type="button" class="ver">Ficha</button></td><td><button type="button" class="ver">Borrar</button></td><td></td>'
  }
  
  
  //FUNCION PARA BORRAR Y MODIFICAR DATOS
  var ultimo = null;
  
  function marcar(elemento) {
    ultimo = elemento;
  }
  
  function limpiar() {
    if (ultimo != null) {
        ultimo.value = "";
    }
  }