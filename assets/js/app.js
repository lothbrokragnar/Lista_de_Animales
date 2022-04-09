class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: <strong>${this.nombre}</strong>. El domicilio es: <strong>${this.direccion}</strong>, y el número de telefóno de contacto es: <strong>${this.telefono}</strong>`
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }

    set nombreMascota(nuevoNombreMascota) {
        this._nombreMascota = nuevoNombreMascota;
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }

    datosMascota() {
        return `El tipo de animal es: <strong>${this.tipo}</strong>, mientras que el nombre de la mascota es: <strong>${this.nombreMascota}</strong>, y el motivo de consulta es: <strong>${this.enfermedad}</strong>.`
    }
}


let formulario = document.getElementById("form");
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let owner = document.getElementById("propietario").value;
    let phoneNumber = document.getElementById("telefono").value;
    let address = document.getElementById("direccion").value;
    let petName = document.getElementById("nombreMascota").value;
    let type = document.getElementById("tipo").value;
    let condition = document.getElementById("enfermedad").value;
    let result = document.getElementById("resultadoLista");
    
    if(isNaN(phoneNumber)){
        alert(`¡Atención! ${phoneNumber} no es un número`)
        limpiar();
    }else{
    let mascotaNueva = new Mascota(owner, address, phoneNumber, type, petName, condition);
    limpiar();
    result.innerHTML = `<li>${mascotaNueva.datosPropietario()}</li> <li>${mascotaNueva.datosMascota()}</li>`;
    }
})

limpiar = () => {
    document.getElementById("propietario").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("nombreMascota").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("enfermedad").value = "";
    document.getElementById("resultadoLista").innerHTML = ""
}
