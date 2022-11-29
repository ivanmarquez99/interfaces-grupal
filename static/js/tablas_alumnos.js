// A PARTIR DE AQUÍ CONTROLAMOS TABLA Y FORMULARIO

$('#addTarea').click(function () {
  var fecha = $('#fecha').val(); 
  var tipo = $('#tipo').val();
  var horas = $('#horas').val();
  var actividad = $('#actividad').val();
  var observaciones = $('#observaciones').val();
  $('table tbody').append(`
      <tr>
          <td id="fecha">${fecha}</td>
          <td id="tipo">${tipo}</td>
          <td id="horas">${horas}</td>
          <td id="actividad">${actividad}</td>
          <td id="observaciones">${observaciones}</td>
          <td><button onclick="dobleClick()">Editar</button></td>
          <td><button class="btn btn-primary btnborrar">Borrar</button></td>
      </tr>`
  );

  document.addEventListener('DOMContentLoaded', function(){
  let formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function() {
  formulario.reset();
});


});
});

// Delegar evento buscando botones por clase
$(document).on('click', '.btnborrar', function() {
  $(event.target).closest('tr').remove();
});


// creamos un evento doble click para cada una de las celdas de la tabla

function dobleClick() {
  const tds=document.querySelectorAll("td");
  
  for(td of tds) {
      td.addEventListener("dblclick",function() {
          // creamos un nuevo input con el valor actual de la celda
          let input=document.createElement('input');
          input.value=this.textContent;
  
          // evento que se ejecuta cuando el input pierde el foco
          input.addEventListener("blur",function() {
              removeInput(this);
          });
  
          // evento que se ejecuta cada vez que se deja de pulsar una tecla
          input.addEventListener("keydown",function(e) {
  
              // la tecla 13, es el Enter
              if(e.which==13) {
                  removeInput(this);
              }
          });
  
          // quitamos el contenido de la celda de la tabla
          this.textContent="";
  
          // Ponemos en la celda el input que hemos creado
          this.appendChild(input);
      });
  }
  
  // Eliminamos el input y ponemos el valor del mismo
  function removeInput(e) {
      e.parentElement.textContent=e.value;
  }
}