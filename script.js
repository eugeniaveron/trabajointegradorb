const valorTicket = 200;
const btn = document.getElementById('btnResumen');
const btnre = document.getElementById('btnBorrar')
var cantidad = document.getElementById('formCantidad');

// función para calcular precio total de entradas
function sumar () {
    let total = parseInt(valorTicket) * parseInt(cantidad.value);
    return total; 
}

// evento para calcular total de precio con descuento según categoría
btn.addEventListener('click', () => {
    const categoria = document.getElementById('categoria');
    const opcion = categoria.value;
    
    sumar()
    let sum = sumar ();
// calcular descuento según categoría    
    if (opcion === "1"){
        let resultado = sum - (sum * 0.8);
        document.getElementById('p').innerText = 'Total a pagar: $ ' + resultado;      
    };

    if (opcion === "2"){
        let resultado = sum - (sum * 0.5);
        document.getElementById('p').innerText = 'Total a pagar: $ ' + resultado;       
    };

    if (opcion === "3"){
        let resultado = sum - (sum * 0.15);
        document.getElementById('p').innerText = 'Total a pagar: $ ' + resultado;       
    };

});
// evento a botón para resetear formulario
btnBorrar.addEventListener('click', () => {
    document.getElementById("form").reset();
    document.getElementById('p').innerText = 'Total a pagar: $ ';
})



