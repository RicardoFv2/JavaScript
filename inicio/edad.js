let edad = prompt("Ingresa tu edad");

if (edad >= 0 && edad < 18) {
  alert("Fuera de este sitio, eres menor de edad");
} else if (edad >= 18 && edad < 70) {
  alert("Eres mayor de edad");
} else if (edad >= 70) {
  alert("Eres de la tercera edad");
} else {
  alert("Dato incorrecto, ingresa una edad valida (0-100)");
}
