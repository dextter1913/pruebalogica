/*1) Tienes un arreglo (llamado myArray) con 5 elementos (enteros en el rango de 1 a 100).
Escribe un programa en JavaScript que imprima el número más alto del arreglo (Si se repite,
solo imprimir una vez).*/

var MyArray = [40,2,4,35,1]
var M = 0
for(i = 0; i < MyArray.length; i++){
    if (MyArray[i] > M)
    {
        M = MyArray[i]
    }
}
console.log(M);





/* 2) Escribir un programa en JavaScript que recorra un arreglo y genere un histograma en
base a los números de este.
El arreglo se llama myArray y contiene 10 elementos que corresponden a números enteros
del 1 al 5. Un histograma representa que tanto un elemento aparece en un conjunto de
datos. Por ejemplo, para el arreglo: myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería así:*/

let arr = [7, 7, 7, 7, 2, 4, 6, 8, 2]

    function imprimir(array) {


    let arrToCompare = []
    array.forEach((x, i) => {
        arrToCompare.includes(x) ? "" : arrToCompare.push(x)
    })

    arrToCompare.forEach(function (x) {
        let arrToJoin = []
        array.forEach(function (i) {
        if (i === x) {
            arrToJoin.push('*')
        }
        })
        console.log(x, arrToJoin.join(''))
    })
    }

    imprimir(arr)



    /* 3) Tienes un arreglo (llamado myArray) con 10 elementos (enteros en el rango de 1 a 5).
    Escribe un programa que imprima el número que tiene más ocurrencias seguidas en arreglo
    y también imprimir la cantidad de veces que aparece en la secuencia.*/

    function ordenar(data){
      data.sort(function (a, b) {
        if (a.fechahora < b.fechahora) {
          return 1;
        }
        if (a.fechahora > b.fechahora) {
          return -1;
        }
        return 0;
      });
    }
    function compare(a, b) {
      if (a < b) {//es menor que b según criterio de ordenamiento
        return -1;
      }
      if (a > b ) {// es mayor que B según criterio de ordenamiento
        return 1;
      }
      // a debe ser igual b
      return 0;
    }