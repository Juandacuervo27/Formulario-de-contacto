function crearUsuario(datos) {
    return {
        id: Date.now(),
        nombreCompleto: `${datos.nombre} ${datos.apellido}`,
        documento: {
            tipo: datos.tipoDoc,
            num: datos.dni
        },
        fechaNacimiento: datos.fechaNacimiento,
        telefono: datos.telefono,
        email: datos.email,
        pais: datos.pais,
        ciudad: datos.ciudad,
        tratamientoDatos: datos.tratamientoDatos
    };
}

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const datosFormulario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        tipoDoc: document.getElementById('tipo_doc').value,
        dni: document.getElementById('dni').value,
        fechaNacimiento: document.getElementById('fecha_nacimiento').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        tratamientoDatos: document.getElementById('tratamiento_datos').checked
    };

    const usuarioGuardado = crearUsuario(datosFormulario);

    console.log('Registro Creado:', usuarioGuardado);

    const usuarioJSON = JSON.stringify(usuarioGuardado);
    localStorage.setItem('usuarioGuardado', usuarioJSON);

    console.log('Usuario Creado');
});
