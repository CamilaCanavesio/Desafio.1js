
//Simulador Interactivo - Presupuesto Hotel

let producto = prompt("Hola! somos Luna Hotel y aquí vas a poder presupuestar tu estadía y consultar nuestras formas de pago \n ¿Cuantas noches querés hosperdarte? \n1.Una \n2.Dos \n3.Tres")
let cuotas = 3;
let Una = 30000;
let Dos = 50000;
let Tres = 75000;


//Precio en Cuotas

const precioCuotas = (cuotas) => {

    //Precios una Noche

    if ((producto == "1") || (producto == "Una") || (producto == "una") || (producto == "UNA")) {
        do {
            alert(`El valor por una noche es de: $${Una}`)
            porcentajeCuota = Una * 0.10;
            valorFinal = porcentajeCuota * cuotas;
            nuevoPrecioUna = Una + valorFinal;
            valorCuota = nuevoPrecioUna / cuotas;
            alert(`Podés abonar en ${cuotas} cuotas, con un valor final de $${nuevoPrecioUna} y el valor de cada cuota sería de $${valorCuota}`);
            cuotas++;
        } while (cuotas <= 12)
    }

    //Precios Dos Noches

    else if ((producto == "2") || (producto == "Dos") || (producto == "dos") || (producto == "DOS")) {
        do {
            alert(` El valor por dos noches es de: $${Dos}`)
            porcentajeCuota = Dos * 0.10;
            valorFinal = porcentajeCuota * cuotas;
            nuevoPrecioDos = Dos + valorFinal;
            valorCuota = nuevoPrecioDos / cuotas;
            alert(`Podés abonar en ${cuotas} cuotas, con un valor final de $${nuevoPrecioDos} y el valor de cada cuota sería de $${valorCuota}`);
            cuotas++;
        } while (cuotas <= 12)
    }

    //Precios Tres Noches

    else if ((producto == "3") || (producto == "Tres") || (producto == "tres") || (producto == "TRES")) {
        do {
            alert(` El valor por dos noches es de: ${Tres}`)
            porcentajeCuota = Tres * 0.10;
            valorFinal = porcentajeCuota * cuotas;
            nuevoPrecioTres = Tres + valorFinal;
            valorCuota = nuevoPrecioTres / cuotas;
            alert(`Podés abonar en ${cuotas} cuotas, con un valor final de $${nuevoPrecioTres} y el valor de cada cuota sería de $${valorCuota}`);
            cuotas++;
        } while (cuotas <= 12)
    }


}


precioCuotas(cuotas)