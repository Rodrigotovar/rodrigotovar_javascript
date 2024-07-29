// aquí definimos los precios de los productos

const PRECIO_PRODUCTO_1 = 199;
const PRECIO_PRODUCTO_2 = 299;
const PRECIO_PRODUCTO_3 = 399;

// se define la tasa de IVA como una constante

const IVA_TASA = 0.016;

// función para calcular el costo total

function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;

// Suponemos que el número máximo de productos seleccionados es 5
    for (let i = 0; i < 5; i++) {
        let producto = productosSeleccionados[i];

        // Usamos switch para determinar el precio del producto
        switch (producto) {
            case 1:
                costoTotal += PRECIO_PRODUCTO_1;
                break;
            case 2:
                costoTotal += PRECIO_PRODUCTO_2;
                break;
            case 3:
                costoTotal += PRECIO_PRODUCTO_3;
                break;
        }
    }

    let iva = costoTotal * IVA_TASA;
    let costoTotalConIVA = costoTotal + iva;

    return costoTotalConIVA;

}

// ejemplo de uso: tuvo que leer 
// sobre los arrays para poner el siguiente ejemplo, 
// espero haya quedado bien

// Aqui van los porductos que el usuario seleccionó
let productosSeleccionados = [1,2,3,1]; 
let totalConIVA = calcularCostoTotal(productosSeleccionados);

// Aquí tuve que investigar sobre la función "toFixed" para redondear el número
// No supe como realizarlo con lo que vimos en clase
console.log(`El costo total con IVA es: $${totalConIVA.toFixed(3)}` + " pesos mexicanos" + ".");