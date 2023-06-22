window.onload=function(){
  var inputElement=document.getElementById('cantidad-cargas');
  inputElement.disabled=true
}

function mostrarFormulario() {
    var formulario = document.getElementById("formularioEmpleado");
    formulario.style.display = "block";
  }

function mostrarBoxResultado() {
  var formulario = document.getElementById("boxResultado");
  formulario.style.display = "block";
}

function ocultarFormulario() {
    var formulario = document.getElementById("formularioEmpleado");
    formulario.style.display = "none";
}

function ActivarCargas(){
  const carga=document.getElementById('carga-familiar').checked;
  if(carga){
   var inputElement=document.getElementById('cantidad-cargas');
   inputElement.disabled=false 
  }
}

// Respuesta b

const obtenerPermanencia = () => {
    mostrarBoxResultado();
    const fechaInicio = document.getElementById("fechaIngreso").value;
    const fechaActual = new Date();     
    const permanencia = calcularPermanencia(fechaInicio, fechaActual);
    document.getElementById("resultado").innerHTML = ` `;
    document.getElementById("resultado").innerHTML = `${permanencia} `;
  };

  function calcularPermanencia(fechaIngreso, fechaActual) {
    var milisegundosPorDia = 86400000; // Cantidad de milisegundos en un día

    var fecha1 = new Date(fechaIngreso);
    var fecha2 = new Date(fechaActual);

    var diferencia = fecha2 - fecha1;

    var diasPermanencia = Math.floor(diferencia / milisegundosPorDia);
    var mesesPermanencia = (fecha2.getMonth() + 12 * fecha2.getFullYear()) - (fecha1.getMonth() + 12 * fecha1.getFullYear());
    var aniosPermanencia = Math.floor(mesesPermanencia / 12);
    var mesesRestantes = mesesPermanencia % 12;
    var diasParaCompletarAnio = Math.ceil((fecha1.getTime() + milisegundosPorDia * 365 - fecha2.getTime()) / milisegundosPorDia);
    mostrarBoxResultado();
    var resultado = "Su permanencia en la organización es de: " + diasPermanencia + " días\n";
    resultado += "</br> Su permanencia en la organización es de: " + mesesPermanencia + " meses\n";
    resultado += "</br> Su permanencia en la organización es de: " + aniosPermanencia + " años y " + mesesRestantes + " meses y " + (diasPermanencia % 30) + " días\n";
    resultado += "</br> Para completar el año de permanencia faltan: " + diasParaCompletarAnio + " días";

    return resultado;
    
  };

//   Respuesta c

function convertirMayusculas(texto) {
    return texto.toUpperCase();
  }

function calcularTotalAsignacionFamiliar(montoPorCarga, cantidadBeneficiarios) {
    return montoPorCarga * cantidadBeneficiarios;
  }

  function calcularAsignacionFamiliar(sueldoSemestreAnterior, tieneCargasFamiliares) {
    var monto;


    if (sueldoSemestreAnterior < 429900) {

      monto = 16828;
    } else if (sueldoSemestreAnterior < 627914) {
   
      monto = 10327;
    } else if (sueldoSemestreAnterior < 979331) {

      monto = 3264;
    } else {

      monto = 0;
    }
  
    if (tieneCargasFamiliares) {
      return monto;
    } else {
      return 0;
    }
  }

function calcularValorTramoFamiliar(sueldoSemestreAnterior) {
    var tramo;

    if (sueldoSemestreAnterior < 429900) {
      tramo = 1;
    } else if (sueldoSemestreAnterior < 627914) {
      tramo = 2;
    } else if (sueldoSemestreAnterior < 979331) {
      tramo = 3;
    } else {
      tramo = 4;
    }
   return tramo;
  }

  function calcularBeneficio1() {
    
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const sueldoActual = parseInt(document.getElementById("sueldo-actual").value);

    const sueldoSemestreAnterior = parseInt(document.getElementById("sueldo-promedio").value);
    const tieneCargasFamiliares = document.getElementById("carga-familiar").checked;
    const cantidadCargasFamiliares = parseInt(document.getElementById("cantidad-cargas").value);

    // Calcular el monto de asignación familiar
    const AsignacionFamiliar = calcularAsignacionFamiliar(sueldoSemestreAnterior, tieneCargasFamiliares);

    // Calcular el total a recibir por asignación familiar
    const totalAsignacionFamiliar = calcularTotalAsignacionFamiliar(AsignacionFamiliar, cantidadCargasFamiliares);

    const TramoFamiliar = calcularValorTramoFamiliar(sueldoSemestreAnterior);
 

// Crear el objeto persona
    const persona = {
        nombre: convertirMayusculas(nombre),
        apellidos: convertirMayusculas(apellidos),
        tieneCargasFamiliares: tieneCargasFamiliares,
        sdoActual: sueldoActual,
        cantidadCargasFamiliares: cantidadCargasFamiliares,
        tramoIngresoSemestreAnterior: TramoFamiliar,
        montoPorCargaFamiliar: AsignacionFamiliar,
        montoTotalAsignacionFamiliar: totalAsignacionFamiliar,
        sueldoConCargasFamiliares: sueldoActual + totalAsignacionFamiliar
    };
  
  //
  mostrarBoxResultado();
  // Mostrar los datos de la persona en el elemento con id="resultado"
  document.getElementById("resultado").innerHTML = ` `;
  document.getElementById("resultado").innerHTML = `
  - Nombre: ${persona.nombre} </br>
  - Apellidos: ${persona.apellidos} </br>
  - Sueldo Actual: ${persona.sdoActual} </br>
  - Monto por carga familiar: ${persona.montoPorCargaFamiliar}</br>
  - Sueldo final: ${persona.sueldoConCargasFamiliares}</br>`;


}


function calcularBeneficio2() {
    
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const sueldoActual = parseInt(document.getElementById("sueldo-actual").value);

  const sueldoSemestreAnterior = parseInt(document.getElementById("sueldo-promedio").value);
  const tieneCargasFamiliares = document.getElementById("carga-familiar").checked;
  const cantidadCargasFamiliares = parseInt(document.getElementById("cantidad-cargas").value);

  // Calcular el monto de asignación familiar
  const AsignacionFamiliar = calcularAsignacionFamiliar(sueldoSemestreAnterior, tieneCargasFamiliares);

  // Calcular el total a recibir por asignación familiar
  const totalAsignacionFamiliar = calcularTotalAsignacionFamiliar(AsignacionFamiliar, cantidadCargasFamiliares);


  const TramoFamiliar = calcularValorTramoFamiliar(sueldoSemestreAnterior);

  //const Nacimiento= document.getElementById("fechaNacimiento").value;

mostrarBoxResultado();

// Crear el objeto persona
const persona = {
  nombre: convertirMayusculas(nombre),
  apellidos: convertirMayusculas(apellidos),
  nacimiento: document.getElementById("fechaNacimiento").value,
  trabajadorActivo: document.getElementById("es-activo").checked,
  tieneCargasFamiliares: tieneCargasFamiliares,
  cantidadCargasFamiliares: cantidadCargasFamiliares,
  tramoIngresoSemestreAnterior: TramoFamiliar,
  montoPorCargaFamiliar: AsignacionFamiliar,
  montoTotalAsignacionFamiliar: totalAsignacionFamiliar,
  sueldoConCargasFamiliares: sueldoActual + totalAsignacionFamiliar
};


// Mostrar los datos de la persona en el elemento con id="resultado"
document.getElementById("resultado").innerHTML = `
- Nombre: ${persona.nombre}</br>
- Apellidos: ${persona.apellidos} </br>
- Fecha de nacimiento: ${persona.nacimiento} </br>
- Trabajador Activo: ${persona.trabajadorActivo ? 'Sí' : 'No'} </br>
- Cargas familiares: ${persona.tieneCargasFamiliares ? 'Sí' : 'No'} </br>
- Cantidad de cargas familiares: ${persona.cantidadCargasFamiliares}</br>
- Tramo de ingreso del semestre anterior: ${persona.tramoIngresoSemestreAnterior}</br>
- Monto por carga familiar: ${persona.montoPorCargaFamiliar}</br>
- Monto total de carga familiar: ${persona.montoTotalAsignacionFamiliar}</br>
- Sueldo con cargas familiares: ${persona.sueldoConCargasFamiliares}</br></br>`;
}