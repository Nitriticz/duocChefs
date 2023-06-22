$(document).ready(function () {
    if (typeof Storage !== "undefined") {
      let platos = JSON.parse(localStorage.getItem("platos"));
      platos.forEach((plato) => {
        let html = `
          <div class="col-3">
              <div class="card" data-bs-toggle="modal" data-bs-target="#platoModal">
                  <div class="card-body pb-0">
                      <div class="img-container mb-2">
                          <div class="img-border">
                              <img src="${plato.imagen}" class="card-img-top">
                          </div>
                      </div>
                      <h3 class="id">${plato.id}</h3>
                      <h3 class="card-title">${plato.nombre}</h3>
                  </div>
                  <div class="col-12 mb-2 text-center recipe-items">
                      <a class="btn"><i class="fa-solid fa-pen"></i><br>Editar</a>
                      <a class="btn"><i class="fa-solid fa-trash-can"></i><br>Borrar</a>
                  </div>
              </div>
          </div>`;
        $(".platos").append(html);
      });
    } else {
      alert("El navegador no posee localStorage");
    }
  });
  