// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let  amigos =[]








function agregarAmigo() {
   const amigo =document.getElementById("amigo").value;
   const lista = document.getElementById("listaAmigos");
        if (validacionTexto(amigo)) {
            amigos.push(amigo);
            document.getElementById("amigo").value = "";
            listaAmigos(lista);
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

function listaAmigos(lista) {
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        lista.appendChild(amigoItem);
    }
   
}



mostrarAmigos = () => {
console.log(amigos);
  
}


function  generarIndiceAleatorio() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length)-1;
    return indiceAleatorio;
}

