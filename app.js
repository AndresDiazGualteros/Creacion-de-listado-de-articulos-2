class Personas{
    constructor(nombre, apellido, documento){
    this.nombre = nombre
    this.apellido=apellido
    this.documento=documento
    }


}

class InterFaz{
    añadirpersona(persona){
        const lista = document.getElementById("personas-list");
        const elemento = document.createElement("div");
        elemento.innerHTML=`               
        <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>: ${nombre.value}
            <strong>Apellido</strong>: ${apellido.value}
            <strong>Documento</strong>: ${documento.value}
            <a href="#" class="btn btn-danger" id="btn" name="eliminar">Eliminar</a>
        </div>
    </div>
    `
    lista.appendChild(elemento)
    this.dejarblanco()
    }
    dejarblanco(){
        document.getElementById("personas-form").reset()
    }

    eliminarPersona(elemento){
        if(elemento.name=="eliminar"){
            elemento.parentElement.parentElement.parentElement.remove()
        }
    }
    mostrarmensaje(mensaje,tipo){
        const div=document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
       const container=document.getElementsByClassName('container')
       const app=document.getElementById('app')
       container[0].insertBefore(div,app)
       setTimeout(function(){
      document.querySelector('.alert').remove()
       },2000)

    }

    mostrarmensaje(mensaje,tipo){
        const div=document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
       const container=document.getElementsByClassName('container')
       const app=document.getElementById('app')
       container[0].insertBefore(div,app)
       setTimeout(function(){
      document.querySelector('.alert').remove()
       },2000)

    } 
}

/* Evento que interactual desde el HTML */
document.getElementById("personas-form").addEventListener("submit", e => {
    e.preventDefault()
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const documento = document.getElementById("documento").value


    if(nombre===""|| apellido===""|| documento===""){
        const interfaz = new InterFaz()
        interfaz.mostrarmensaje('campos vacios', 'warning')
    }else{
        const persona=new Personas(nombre,apellido,documento)
        const interfaz = new InterFaz()
        interfaz.añadirpersona(persona)
        interfaz.mostrarmensaje('Añadido correctamente','primary','border border-secondary')
    }
    
})


document.getElementById('personas-list').addEventListener('click', evento=>{
    if(evento.target.name=='eliminar'){
    const Interfaz1=new InterFaz
    Interfaz1.eliminarPersona(evento.target)
    Interfaz1.mostrarmensaje('Usuario eliminado', 'danger','border border-danger')  
    }
})
