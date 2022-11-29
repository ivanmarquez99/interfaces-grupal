function Login(){ 
    var done=0; 
    var usuario=document.getElementById("mail").value;
    var password=document.getElementById("pass").value; 
    var regis = document.getElementById("register");
    
    if (usuario=="francisco@admin.com" && password=="123456") { 
      window.location.href = ("lista_alumnos.html");
    } else if (usuario == "pepe@alumno.com" && password=="123456") {
      window.location.href =("pepe_viyuela_alumno.html");
  
    } else if (usuario == "amancio@alumno.com" && password=="123456") {
      window.location.href = ("amancio_ortega_alumno.html");
    
    } else if (usuario == "lucia@alumno.com" && password=="123456") {
      window.location.href = ("lucia_barbilla_alumno.html");
    }
  }