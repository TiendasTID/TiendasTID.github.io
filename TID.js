document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}








document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

function mostrar_buscador(){
    bars_search.style.top= "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}

function ocultar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }
}

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = ""; 
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }
        } else {
            li[i].style.display = "none";
        }
    }
}

// Agregar evento de clic a cada elemento de la lista
liElements = document.querySelectorAll("#box-search li a");

liElements.forEach(function(a) {
    a.addEventListener("click", function(event) {
        event.preventDefault();
        const id = this.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });

            // Esperar un momento para que el desplazamiento se complete antes de ocultar el buscador
            setTimeout(ocultar_buscador, 200);
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');
    let indiceProductoActual = 0;
  
    // Inicializa los productos al cargar la página
    inicializarProductos();
  
    // Agrega eventos a las flechas para cambiar de producto
    const flechasIzquierda = document.querySelectorAll('.flecha-izquierda');
    const flechasDerecha = document.querySelectorAll('.flecha-derecha');
  
    flechasIzquierda.forEach(flecha => {
      flecha.addEventListener('click', () => cambiarProducto(-1));
    });
  
    flechasDerecha.forEach(flecha => {
      flecha.addEventListener('click', () => cambiarProducto(1));
    });
  
    // Función para cambiar al siguiente o anterior producto
    function cambiarProducto(direccion) {
      // Oculta el producto actual
      productos[indiceProductoActual].classList.remove('seleccionado');
      productos[indiceProductoActual].style.display = 'none';
  
      // Calcula el índice del nuevo producto
      indiceProductoActual += direccion;
      if (indiceProductoActual < 0) {
        indiceProductoActual = productos.length - 1;
      } else if (indiceProductoActual >= productos.length) {
        indiceProductoActual = 0;
      }
  
      // Muestra el nuevo producto
      productos[indiceProductoActual].classList.add('seleccionado');
      productos[indiceProductoActual].style.display = 'block';
    }
  
    // Función para inicializar los productos
    function inicializarProductos() {
      for (let i = 1; i < productos.length; i++) {
        productos[i].style.display = 'none';
      }
    }
  });
  