//Simulador casas de Harry Potter

//Le pedimos el nombre al usuario

let nombreUser = prompt("¿Como te llamas?")

//Generando un class constructor de objetos valor
class valor{
    constructor(id,opcion){
        this.id = id,
        this.opcion = opcion
    }
}

const valores1 = new valor (1, "Valentia y fuerza")
const valores2 = new valor (2, "Justicia y lealtad")
const valores3 = new valor (3, "Sabiduria y voluntad")
const valores4 = new valor (4, "Ambicion y astucia")

//Creando array VALORES
const VALORES = [valores1,valores2,valores3,valores4];

//Funcion para evaluar si el caracter ingresado es un numero
function valorNumerico(numero, mensaje){
    while(isNaN(numero)){
        alert ("El valor tiene que ser numerico, volve a intentar")
        numero = parseInt(prompt(mensaje))
    }
    return numero
}

//Funcion para que el usuario pueda realizar la encuesta
function encuesta(){
    //Introduccion a la encuesta
    let presentacion = "Bienvenido/a al simulador interactivo de casas de Harry Potter. Para saber en que casa de Hogwarts encajas, tenes que elegir el numero correspondiente a los valores que sentis que te representan mas. \n";
    VALORES.forEach(e =>{
        presentacion += `${e.id} - ${e.opcion} \n`
    })

    //Pidiendo respuesta al usuario
    let eleccionUser = parseInt(prompt(presentacion))
    eleccionUser = valorNumerico (eleccionUser, presentacion)

    //Evaluando la repsuesta del usuario y enviandole la respuesta
    if (eleccionUser == 1){
        alert(`${nombreUser}, tus valores encajan a la perfeccion en Gryffindor. Bienvenido/a a Hogwarts, gracias por participar`)
    }else if (eleccionUser == 2){
        alert(`${nombreUser}, tus valores encajan a la perfeccion en Hufflepuff. Bienvenido/a a Hogwarts, gracias por participar`)
    }else if (eleccionUser == 3){
        alert(`${nombreUser}, tus valores encajan a la perfeccion en Ravenclaw. Bienvenido/a a Hogwarts, gracias por participar`)
    }else if (eleccionUser == 4){
        alert(`${nombreUser}, tus valores encajan a la perfeccion en Slytherin. Bienvenido/a a Hogwarts, gracias por participar`)
    }
}

encuesta()