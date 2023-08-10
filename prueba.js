//Matriz original
const m = [
  [0, 1, 1, 2],
  [1, 5, 1, 0],
  [2, 0, 3, 3],
];

//Funcion que va a recibir la matriz y va a recibir un array de booleanos que coincide con true la columna que no tenga 0
const sumNonZeroColumns = (matrix) => {
  //

  // Mapeo sobre cualquier elemento (en este caso el 0) para obtener el no. de columnas que no tengan 0
  const nonZeroColumnIndices = matrix[0].map(
    (_, col) =>
      //solo nos interesa el index, que en este caso marcamos como col
      matrix.every((row) => row[col] !== 0)
    //con el metodo every checamos si en los elementos de la columna hay algun cero, si no hay cero retorna true
    //con esto obtenemos el array de booleanos
  );

  //

  //hacemos un reduce del array de booleanos que obtuvimos anteriormente
  const columnSums = nonZeroColumnIndices.reduce(
    (
      acc /*el acumulador*/,
      include /*el valor actual*/,
      col /*index o columna*/
    ) => {
      //checamos si en la posicion hay cero, si no hay procedemos a hacer la suma
      if (include) {
        const sum = matrix.reduce((sum, row) => sum + row[col], 0);
        //hacemos la suma de los elementos de la columna

        acc[col] = sum; // Asignamos el la property como indice y el value como el valor de la suma
      }
      return acc;
    },
    {}
  );

  //retornamos el objeto con index y resultado de la suma
  return columnSums;
};

//lamamos a la funcion con nuestra matriz
const result = sumNonZeroColumns(m);
console.log(result);
