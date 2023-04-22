// array con los valores de cambio de cada moneda
const tiposDeCambio = [
    { moneda: 'USD', valor: 0.0046 },
    { moneda: 'EUROS', valor: 0.0042 },
    { moneda: 'LIBRAS', valor: 0.0037 },
    { moneda: 'REALES', valor: 0.023 },
  ];
  
  // funcion para agregar nuevos tipos de cambio
  function agregarTipoCambio() {
    respuesta = prompt('¿Desea agregar otro tipo de cambio? (S/N)');
    while (respuesta.toUpperCase() === 'S') {
      const tipo = prompt('Ingrese el tipo de moneda (por ejemplo, YENES):');
      const valor = parseFloat(prompt(`Ingrese el valor de cambio de 1 ARS a ${tipo}:`));
      tiposDeCambio.push({ moneda: tipo, valor: valor });
      console.log(`El tipo de cambio de 1 ARS a ${tipo} se ha agregado con éxito. Los tipos de cambio actualizados son:`);
      console.log(tiposDeCambio);
      respuesta = prompt('¿Desea agregar otro tipo de cambio? (S/N)');
    }
    console.log('No se han agregado nuevos tipos de cambio.');
  }
  
  // pesos a otra moneda
  function convertirAPesos(cantidad, monedaDestino) {
    const tipoCambio = tiposDeCambio.find(tipo => tipo.moneda === monedaDestino);
    return cantidad * tipoCambio.valor;
  }
  
  // pedimos al usuario los valores
  const cantidadPesos = prompt('Ingrese la cantidad de pesos argentinos a convertir:');
  const monedaDestino = prompt('Ingrese el tipo de moneda a la que desea convertir sus pesos (USD, EUROS, LIBRAS o REALES):');
  const cantidadMonedaDestino = convertirAPesos(cantidadPesos, monedaDestino); 
  console.log(`${cantidadPesos} ARS son ${cantidadMonedaDestino.toFixed(2)} ${monedaDestino}`);
  
  agregarTipoCambio();
  
