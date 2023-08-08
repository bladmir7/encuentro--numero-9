const fechaNacimiento=document.getElementById("fechaNacimiento");
const edad=document.getElementById("edad");
const calcularEdad=(fechaNacimiento)=>{
    const fechaActual=new Date();
    const añoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    //2023-01-01
    const añoNacimiento=parseInt(String(fechaNacimiento).substring(0,4))
    const mesNacimiento=parseInt(String(fechaNacimiento).substring(5,7))
    const diasNacimiento=parseInt(String(fechaNacimiento).substring(8,10))

    let edad=0
    if(mesActual<mesNacimiento){
        edad--;
     } else if(mesActual=== mesNacimiento){
        if (diaActual < diasNacimiento) {
            edad--;
        }
    }
    return edad;
}

window.addEventListener("change", function () {
   if(this.value);
   edad.innerText = 'la edad es:  ${calcularEdad(this.value} años';

   
})