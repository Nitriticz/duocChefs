$(document).ready(function () {
  let platos = JSON.parse(localStorage.getItem("platos"));
  let cards = document.querySelectorAll(".card");
  const fileName = document.location.pathname.match(/[^\/]+$/)[0];
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      let id = card.children[0].querySelector(".id").textContent;
      platos.map((plato) => {
        if (plato.id == id) {
          $("#ordenId").text(plato.id);
          $("#ordenPlato").text(plato.nombre);
          $("#ordenImg").attr("src", plato.imagen);
          if (fileName == "menu.html") {
            $("#ordenPrec").text("Precio: $" + plato.precio);
            $("#ordenDesc").text(plato.descripcion);
          } else if (fileName == "recetas.html") {
            $("#ordenPrec").append("<b>Precio:</b> $" + plato.precio);
            plato.ingredientes.forEach(ingrediente => {
              $("#ordenIng").append("<li>" + ingrediente + "</li>");
            });
            $("#ordenModo").append("<b>Modo de servir: </b>" + plato.modo);
            let i = 1;
            plato.preparacion.forEach(paso => {
              $("#ordenPrep").append("<li>" + paso + "</li>");
            });
          }
        }
      });
    });
  });

  $("#ordenSubmit").click(function () {});

  $("#closeReceta").click(function () {
    $("#ordenPrec").text("");
    $("#ordenIng").text("");
    $("#ordenModo").text("");
    $("#ordenPrep").text("");
  });
});
