import { clientServices } from "../service/cliente-service.js";
const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email').value;
    //console.log(nombre, '----', email );
    clientServices.crearCliente(nombre, email).then(respuesta =>{
        //console.log(respuesta)
        window.location.href ='/screens/registro_completado.html';
    }).catch(err=>console.log(err));
});