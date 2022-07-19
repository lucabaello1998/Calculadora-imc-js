
const boton=document.getElementById('boton')
const resultado=document.getElementById('resultado')
const result=document.getElementById('result')
let saludo="saludo"
const calculoImc=()=>{
    let peso=document.getElementById('peso').value
    let altura=document.getElementById('altura').value/100
    let imc=Math.round(peso/(altura*altura))
    let mensaje="";
    if(imc <= 18.5){
        resultado.style.color= "violet";
        result.style.color="violet";
         mensaje="el imc esta por debajo del peso normal |"
         msj="bmi is low to normal |"
    }else if(imc<25){
        resultado.style.color= "green";
        result.style.color="green";
        mensaje="peso normal |"
        msj="normal weight |"
    }else if(imc<30 || imc>30){
        resultado.style.color= "red";
        result.style.color="red";
        mensaje="sobrepeso |"
        msj="overweight |"
    }//else{
    //     resultado.style.color= "blue";
    //     result.style.color="blue";
    //     mensaje="lo termino despues"
    // }
    resultado.innerHTML = `${mensaje} el peso es: ${peso} y la altura es: ${altura} y el imc es: ${imc}`
    result.innerHTML =  `${msj} weight is: ${peso} and  height is: ${altura} and bmi is: ${imc}`
}

console.log(``)

boton.addEventListener('click',calculoImc)

// //declaracion de variables
// const botonCalcular=document.getElementById('boton')

// //declaracion de funciones
// const calculoImc =()=>{
//     let peso=document.getElementById('peso').value
//     let altura=document.getElementById('altura').value/100
//     let resultado=document.getElementById('resultado')
//     let imc= peso / (altura * altura)
//     let mensaje=""
//     if(imc<=18.5){
//         mensaje="el imc esta debajo del peso normal"
//     }else if(imc<25){
//         mensaje="peso normal"
//     }else if(imc<30){
//         mensaje="sobrepeso"
//     }else{
//         mensaje="lo termino despues"
//     }
// resultado.innerHTML=mensaje
// }

// //eventos
// botonCalcular.addEventListener('click',calculoImc)
// <form>
//     <h1>Calculador IMC</h1>
//     <label>Ingrese su Peso</label>
//     <input type="number" id="peso">
//     <label>Ingrese su altura</label>
//     <input type="number" id="altura">
//     <label > ingrese su nombre</label>
//     <input type="text">
//     <input type="submit" value="Calcular" id="boton">
//    </form> 
//    <p id="resultado"></p>
