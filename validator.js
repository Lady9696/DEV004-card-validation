// metodo key: value
const validator = {
  maskify: (numero) => {
    // me sirve para extraer los ùltimos 4 nùmeros del array
    const guardarCuatro = numero.slice(-4)
    //para volver al string array
    const numeroArr = numero.split("")

    //Vamos a recorrer el array
    for (let i = 0; i < numeroArr.length; i++) {
      //para reemplazar los numeros por #
      //consultar esto
      numeroArr[i] = numeroArr[i].replace(/^[A-Za-z0-9\s]+$/g,'#');
    }
    const numeroTransform = numeroArr.join(''); //para volver el array a un string
    //console.log(numeroTransform);
    const masked = numeroTransform.slice(0, -4) + guardarCuatro; //aqui se slice extrae 
    //desde el primer numero, los 12 difgitos, concateno los ùltimos 4 digitos para
    return masked
  },
  isValid: (numero) => {
    const arryNumero = Array.from(numero);
    //console.log(arryNumero);
    // se invierte el nùmero
    arryNumero.reverse()
    //console.log(arryNumero);
    // se declarna las variables afuera para usarlas en el desarrollo de los condicionales
    const multi = []; // array para almacenar numeros multiplicados
    // se utiliza esto para indicar que solo va ingresar un dato si este es un array
    if (arryNumero instanceof Array) {
      // este for lo utilizo para recorrer la longitud o numero de caracteres de los datos ingresados 
      // mientras sea menor a la longuitud, ya si la longuitud es mayor a el nùmero de veces recorrido se rompe el bucle   
      //let sumaParesMayores = 0;
      //sum = 0;
      for (let i = 0; i < arryNumero.length; i++) {
        // Aqui pongo la condiciòn para que solo las posiciones pares se multipliquen
        //Las posiciones que se van a multiplicar son, son las imapres
        // 0%2 = indefninido 1%2= 0,5 no cumple la condiciòn, 2%2= 0 cumple, 3%0= 1.5 no cumple 4%2=0 si
        if (i % 2 === 1) {
          //aquì estoy multiplicando el array y la posiciòn que se simboliza con el i y lo guardo en la variable multi
          //console.log(arryNumero[i] * 2);
          multi[i] = (arryNumero[i] * 2);
          //console.log(arryNumero[i] * 2)
          //console.log(multi);
          // let sumaParesMayores = JSON.stringify(multi);
          if (multi[i] >= 10) {
            const numero1 = multi[i].toString()[0]
            const numero2 = multi[i].toString()[1]
            //console.log(numero1);
            //console.log(numero2);
            multi[i] = parseInt(numero1) + parseInt(numero2);
            //console.log(multi);
          }
        } else {
          multi[i] = arryNumero[i] * 1;//esto son los impares
          //console.log(multi);
        }
      }
    }
    //suma utilizando el mètodo reduce
    const sumaNumeros = multi.reduce((acumulador, valorActual) => acumulador + valorActual);
    // console.log(sumaNumeros);
    if (sumaNumeros % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
};
export default validator;
