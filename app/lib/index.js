export const convertirAArregloDeNombres = (nombresString) => {
  // Verifica si la cadena está vacía o solo contiene espacios
  if (!nombresString.trim()) {
    return [];
  }

  // Divide la cadena en un arreglo utilizando la coma y el espacio como separador
  const nombresArray = nombresString.split(",").map((nombre) => nombre.trim());

  return nombresArray;
};
