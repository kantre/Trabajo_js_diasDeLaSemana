const dia = prompt("Ingrese un dia de la semana: ");

switch(dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        alert("Es un dia laboral");
        break;
    case "sabado":
    case "domingo":
        alert("Dia de descanso");
    default:
        alert("No es una opcion valida");
        break;
}


// if(dia == "lunes"|| dia == "martes"|| dia == "miercoles"|| dia == "jueves"|| dia == "vienes"){
//     alert("Es un dia laboral");
// }
// else if(dia == "sabado" || dia == "domingo"){
//     alert("Es un dia de descanso");
// }
// else {
//     alert("Opcion no valida");
// }