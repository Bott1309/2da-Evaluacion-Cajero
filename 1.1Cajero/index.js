document.getElementById("login-form").addEventListener("submit", function(event) {
    var numero_cliente = document.getElementById("numero_cliente").value;
    var contrasena = document.getElementById("contrasena").value;
    console.log("No Entro")
    if (numero_cliente !== "1515" && contrasena !== "132#") {
    console.log(numero_cliente)
    console.log(contrasena)
      alert("Verifique los datos de usuario o contraseña");
    } else {
        window.open("./Pagina.Principal.html");
    }
  });
  