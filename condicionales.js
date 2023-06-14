// Punto 1
var numero = prompt("Ingresa un numero: ");
numero = parseInt(numero);
if ( numero % 2 === 0){
    document.write(numero + " Es numero par");
}else{
    document.write( numero + "Es numero impar");
}
if ( numero > 0){
    document.write(numero + " Es numero Positivo");
}else if (numero < 0 ){
    document.write(numero + "Es numero negativo");
}else{
    document.write(numero + "Es numero cero");
}

// Punto 2 
var num1 = prompt("Ingresa el primer numero: ");
num1 = parseInt(Numero1);
var num2 = prompt("Ingresa el segundo numero: ");
num2 = parseInt(Numero2);
if (num1 > num2){
    document.write(numero1 + "Es mayor que " + numero2 + "0" );
    document.write(numero2 + "Es menor que " + numero1 + "0");
}else if (num1 < num2){
    document.write(numero1 + "Es menor que" + numero2 + "0");
    document.write(numero2 + "Es mayor que" + numero1 + "0");
}else{
    document.write("Los dos numeros son iguales: " + numero1 + numero2);
}

// Punto 3
var num=prompt("Ingresa un numero del 1 al 7: ")
num = parseInt(numero);
var dia;
switch(num){
    case 1:
        dia = "lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sabado";
        break;
    case 7:
        dia = "Domingo";
        break;
    default:
        dia = "Numero no valido";                            
}
document.write("El numeor " + num + "Corresponde al dia de la semana: " + dia);

//punto 4
var edad = prompt("Ingresa tu edad: ")
edad = parseInt(edad);
var etapa;
if(edad < 18){
    etapa = "Adolecente";
}else if (edad >= 18 && edad <= 28){
    etapa = "Adulto Adolecente";
}else if (edad >= 29 && edad <= 49){
    etapa = "Adulto";
}else {
    etapa = "Adulto mayor";
}
document.write("Tu etapa es: " + etapa);

//punto 5
var producto1 = prompt("Ingresa el valor del producto 1 :")
var producto2 = prompt("Ingresa el valor del producto 2 :")
var producto3 = prompt("Ingresa el valor del producto 3 :")
producto1 = parseFloat(producto1)
producto2 = parseFloat(producto2)
producto3 = parseFloat(producto3)
var total = producto1 + producto2 + producto3;
var metodoPago = prompt("Ingresa el metodo de pago: ")
var valorApagar
if (metodoPago === "efectivo"){
    valorApagar = total;
}else if (metodoPago === "cupon"){
    var descuento = total * 0.03;
}else if (metodoPago === "credito"){
    var aumento = total * 0.05;
    valorApagar = total + aumento;
}else {
    valorApagar = 0;
}
document.write("El valor total de la factura es: " + total)
document.write("El calor a pagar es: " + valorApagar);

//punto 6
var nota1 = prompt("Ingresa la nota 1:")
var nota2 = prompt("Ingresa la nota 2:")
var nota3 = prompt("Ingresa la nota 3:")
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
var promedio = (nota1 + nota2 +  nota3) / 3;
var nivel;
if (promedio < 2.0){
    nivel = "Malo"
}else if (promedio < 2.9){
    nivel = "recuperacion"
}else if (promedio < 3.9){
    nivel = "promedio"
}else if (promedio < 4.4){
    nivel = "Bueno"
}else{
    nivel = "Excelente"
}
document.write("El promedio del alumno es: " + promedio);
document.write("El nuvel del alumno es: " + nuvel);

//punto 7
var diaNacimineto = prompt("Ingresa el mes de nacimiento: ")
var mesNacimiento = prompt("Ingresa el mes de nacimiento: ")
var anioNacimiento = prompt("Ingresa el año de nacimiento: ")
var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var mesActual = fechaActual.getMonth() + 1; 
var anioActual = fechaActual.getFullYear();
var edad;
if (mesNacimiento <= mesActual) {
  if (diaNacimiento <= diaActual) {
    edad = anioActual - anioNacimiento;
  } else {
    edad = anioActual - anioNacimiento - 1;
  }
} else {
  edad = anioActual - anioNacimiento - 1;
}
document.write("La edad actual es: " + edad);

//punto 8
//incompleto 
    /*var edad = parseInt(prompt("Ingresa la edad del paciente:"));
    var dias = parseInt(prompt("Ingresa la cantidad de días de hospitalización:"));
    var valorDia;
    var recargo;
    var totalPagar;
    if (edad >= 0 && edad <= 10) {
      valorDia = 20000;
    } else if (edad >= 11 && edad <= 17) {
      valorDia = 30000;
    } else if (edad >= 18 && edad <= 49) {
      valorDia = 25000;
    } else {
      valorDia = 15000;
    }
    if (dias <= 1) {
      recargo = 0;
    } else if (dias >= 2 && dias <= 4) {
      recargo = 0;
    } else if (dias >= 5 && dias <= 7) {
      recargo = 5;
    } else {
      recargo = 10;
    }
    totalPagar = (valorDia * dias) * (1 + (recargo / 100));
    document.write("Días de hospitalización: " + dias);
    document.write("Valor del día según la edad: $" + valorDia);
    document.write("Recargo: " + recargo);
    document.write("Total a pagar: $" + totalPagar);*/
