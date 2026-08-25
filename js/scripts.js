function crearUsuario(nombre, apellido, tipoDoc, dni, fechaNacimiento, telefono, email, pais, ciudad, tratamientoDatos) {
    return {
        id: Date.now(),
        nombreCompleto: `${nombre} ${apellido}`,
        documento: {
            tipo: tipoDoc,
            num: dni
        },
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        email: email,
        domicilio: {
            pais: pais,
            ciudad: ciudad
        },
        tratamientoDatos: tratamientoDatos
    };
}

const formulario = document.querySelector('form');

function agregarPropiedadesUsuario(usuario) {
    return {
        ...usuario,
        activo: true,
        rol: 'admin'
    };
}

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

    const usuarioGuardado = crearUsuario(
        datosFormulario.nombre,
        datosFormulario.apellido,
        datosFormulario.tipoDoc,
        datosFormulario.dni,
        datosFormulario.fechaNacimiento,
        datosFormulario.telefono,
        datosFormulario.email,
        datosFormulario.pais,
        datosFormulario.ciudad,
        datosFormulario.tratamientoDatos
    );

    const usuarioActualizado = agregarPropiedadesUsuario(usuarioGuardado);

    console.log('Objeto Original (Sin cambios):', usuarioGuardado);
    console.log('Objeto Nuevo (Con Spread):', usuarioActualizado);

    const usuarioJSON = JSON.stringify(usuarioActualizado);
    localStorage.setItem(`usuario_${usuarioActualizado.id}`, usuarioJSON);

    console.log(`Usuario guardado exitosamente con la key: usuario_${usuarioActualizado.id}`);
    formulario.reset();
});

