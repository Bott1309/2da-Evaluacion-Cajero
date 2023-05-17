var saldo = 100000;
actualizarSaldo() // lo mando a llamar para que aparezca el saldo 

// Función para actualizar el saldo en la página
function actualizarSaldo() {
	var saldoFormatted = saldo.toLocaleString("es-MX"); //toLocaleString:devuelve un cadena con la representación al idioma de la fecha especificada.
	document.getElementById("saldo").innerText = saldoFormatted + " mxn"; //innerHTML: añade el valor de saldo actual al id="saldo" //innerHTML: añade el valor de saldo actual al id="saldo"
}

// Función para ingresar dinero
function ingresar() {
	var cantidad = parseFloat(document.getElementById("ingreso").value); /*parrseFloat = analiza un argumento 
    (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.*/
	if (!isNaN(cantidad) && cantidad > 0) { //!isNaN: verifica que el saldo no sea un carácter y que sea mayor a 0
		saldo += cantidad; //a saldo le sumamos cantidad
		actualizarSaldo(); //Para que se vea
        if (cantidad > 50000) {
            alert("No puedes ingresar más de 50000 mxn");
            saldo -= cantidad; //saldo tiene que ser menor que cantidad
            actualizarSaldo(); //Para que se vea 
            }
  }
   
}

// Función para retirar dinero
function retirar() {
	var cantidad2 = parseFloat(document.getElementById("retiro").value);
	if (!isNaN(cantidad2) && cantidad2 > 0 && cantidad2 <= saldo) {
		if (cantidad2 <= 30000) {
			saldo -= cantidad2; // a saldo le restamos cantidad2
			actualizarSaldo();
		} else {
			alert("No puedes retirar más de 30000 mxn");
		}
	}
}

// Definir dinero en la cuenta 2
var saldo2 = 10000;
actualizarSaldo2();

// Función para actualizar el saldo en la página
function actualizarSaldo2() {
	document.getElementById("saldo2").innerText = saldo2 + " mxn";
}

// Función para transferir dinero
function tranferir() {
	var cantidad3 = parseFloat(document.getElementById("transferencia").value);
	if (!isNaN(cantidad3) && cantidad3 > 0) { //!isNaN: verifica que el saldo no sea un carácter y que sea mayor a 0
			if (cantidad3 <= saldo2) {
				saldo -= cantidad3;
				saldo2 += cantidad3;
				actualizarSaldo();
				actualizarSaldo2();
			} else {
				alert("No tienes suficiente saldo para transferir esa cantidad");
			} if (cantidad3 > 4000) {
				alert("No puedes tranferir más de  mxn");
				saldo2 -= cantidad3; //saldo tiene que ser menor que cantidad
				actualizarSaldo2(); //Para que se vea 
				}
		}
	}
