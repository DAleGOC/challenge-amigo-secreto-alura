// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let  amigos =[]








function agregarAmigo() {
   let amigo =document.getElementById("amigo").value;
    
        if (validacionTexto(amigo)) {
            amigos.push(amigo);
            document.getElementById("amigo").value = "";
            mostrarAmigos();
        }
        else {
            alert("Por favor, inserte un nombre.");
            document.getElementById("amigo").value = "";
        }
    

}

function validacionTexto(nombre) {
   let valor;
    
    if (!nombre || nombre.trim() === '') {
       alert('El nombre no puede estar vacío');
       document.getElementById("amigo").value = "";
        return false;
    }
    
    
    if (!isNaN(nombre.trim())) {
        alert('El nombre no puede ser un número');
        return false;
    }
    
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombre.trim())) {
        alert('El nombre solo puede contener letras');
        return false;
    }
    
    return true;
}

mostrarAmigos = () => {
console.log(amigos);
  
}




