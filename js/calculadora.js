var contadorIngredientes = 1;

function agregarIngrediente() {
    var container = document.getElementById("ingredientesContainer");

    var divIngrediente = document.createElement("div");

    var nombreInput = document.createElement("input");
    nombreInput.setAttribute("type", "text");
    nombreInput.setAttribute("placeholder", "Nombre del ingrediente " + contadorIngredientes);
    nombreInput.setAttribute("class", "nombreIngrediente");

    var precioInput = document.createElement("input");
    precioInput.setAttribute("type", "number");
    precioInput.setAttribute("placeholder", "Precio del ingrediente " + contadorIngredientes);
    precioInput.setAttribute("class", "precioIngrediente");

    var gramosInput = document.createElement("input");
    gramosInput.setAttribute("type", "number");
    gramosInput.setAttribute("placeholder", "Gramos comprados " + contadorIngredientes);
    gramosInput.setAttribute("class", "gramosIngrediente");

    var gramosNecesitadosI = document.createElement("input")
    gramosNecesitadosI.setAttribute("type", "number")
    gramosNecesitadosI.setAttribute("placeholder", "Gramos necesitados " + contadorIngredientes);
    gramosNecesitadosI.setAttribute("class", "gramosNecesitados");

    var btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    btnEliminar.setAttribute("onclick", "eliminarIngrediente(this)");
    btnEliminar.setAttribute("class", "eliminarBtn")

    divIngrediente.appendChild(nombreInput);
    divIngrediente.appendChild(precioInput);
    divIngrediente.appendChild(gramosInput);
    divIngrediente.appendChild(gramosNecesitadosI);
    divIngrediente.appendChild(btnEliminar);

    container.appendChild(divIngrediente);

    contadorIngredientes++;
}

function eliminarIngrediente(elemento) {
    var ingrediente = elemento.parentNode;
    ingrediente.parentNode.removeChild(ingrediente);
}

function obtenerValores() {
    var nombres = document.getElementsByClassName("nombreIngrediente");
    var precios = document.getElementsByClassName("precioIngrediente");
    var gramos = document.getElementsByClassName("gramosIngrediente");
    var gramosN = document.getElementsByClassName("gramosNecesitados");

    var totalPPP = 0;

    for (var i = 0; i < nombres.length; i++) {
        var nombre = nombres[i].value;
        var precio = parseFloat(precios[i].value);
        var gramo = parseFloat(gramos[i].value);
        var gramoN = parseFloat(gramosN[i].value);
        var ppp = (precio * gramoN) / gramo;

        console.log("Ingrediente " + (i + 1) + ":");
        console.log("Nombre: " + nombre);
        console.log("Precio: " + precio);
        console.log("Gramos: " + gramo);
        console.log("Gramos Necesitados: " + gramoN);
        console.log("Precio Por Unidad: " + ppp);
        console.log("------------------");

        totalPPP += ppp;
    }

    mostrarResultado(totalPPP);
}

function mostrarResultado(totalPPP) {
    var np = document.getElementById("NombrePro");
    var resultadoContainer = document.getElementById("resultadoContainer");
    var nombreProductoDiv = document.getElementById("nombreProductoDiv");

    var rt = document.createElement("p")
    var nombrePro = document.createElement("h1");
    nombrePro.innerHTML = np.value;
    nombreProductoDiv.innerHTML = "";
    nombreProductoDiv.appendChild(nombrePro);

    resultadoContainer.innerHTML = "";
    rt.innerHTML = "Precio de Producción: " + "$" +totalPPP;
    resultadoContainer.appendChild(rt);
    var incremento = 10;
    while (incremento <= 100) {
        var precioVenta = totalPPP * (1 + incremento / 100);
        var resultado = document.createElement("p");
        resultado.innerHTML ="Precio de Venta (+" + incremento + "% de ganancia): $" + precioVenta.toFixed(2);
        resultadoContainer.appendChild(resultado);

        incremento += 10;
    }
}


function restablecerValores() {
    var nombres = document.getElementsByClassName("nombreIngrediente");
    var precios = document.getElementsByClassName("precioIngrediente");
    var gramos = document.getElementsByClassName("gramosIngrediente");
    var gramosN = document.getElementsByClassName("gramosNecesitados")

    for (var i = 0; i < nombres.length; i++) {
        nombres[i].value = "";
        precios[i].value = "";
        gramos[i].value = "";
        gramosN[i].value = "";
    }

    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.innerHTML = "";
}