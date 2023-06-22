$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    //localStorage.removeItem('usuarios');
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (usuarios === null) {
      usuarios = [];
      usuarios.push(
        {
          username: "admin",
          password: "admin",
          nombre: "Administrador",
          tipo: "Administrador",
          logged: false,
        },
        {
          username: "gia.soto",
          password: "123456",
          nombre: "Gian Soto",
          tipo: "Comensal",
          logged: false,
        }
      );
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
    const fileName = document.location.pathname.match(/[^\/]+$/)[0];
    if (fileName != "login.html") {
      let loggedIn = usuarios.find((usuario) => usuario.logged === true);
      if (loggedIn !== undefined) {
        if (loggedIn.tipo === "Administrador") {
          $("#tabPedido").toggle();
        } else if (loggedIn.tipo === "Comensal") {
          $("#tabReceta").toggle();
          $("#tabPedidos").toggle();
          $("#tabUsuarios").toggle();
        } else if (loggedIn.tipo === "Chef") {
          $("#tabPedido").toggle();
          $("#tabPedidos").toggle();
          $("#tabUsuarios").toggle();
        } else if (loggedIn.tipo === "SuChef") {
          $("#tabPedido").toggle();
          $("#tabUsuarios").toggle();
        } else if (loggedIn.tipo === "Mesero") {
          $("#tabPedido").toggle();
          $("#tabUsuarios").toggle();
        } else if (loggedIn.tipo === "Repartidor") {
          $("#tabReceta").toggle();
          $("#tabPedido").toggle();
        }
        $("#user-info").append(
          loggedIn.nombre + "<br><b>" + loggedIn.tipo + "</b>"
        );
        let html = `
          <div class="dropdown">
            <i class="fa-solid fa-circle-user" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#" id="close-session">Cerrar Sesión</a></li>
            </ul>
          </div>`;
        $("#userContainer").append(html);
        $("#close-session").on("click", function () {
          usuarios = usuarios.map((usuario) => {
            if (usuario === loggedIn) {
              usuario.logged = false;
            }
            return usuario;
          });
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          window.location.replace("menu.html");
        });
      } else {
        $("#tabReceta").toggle();
        $("#tabPedidos").toggle();
        $("#tabUsuarios").toggle();
        $("#user-info").append("Sesión no Iniciada<br><b>Comensal</b>");
        let html = `
          <div class="dropdown">
            <i class="fa-solid fa-circle-user" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="login.html">Iniciar Sesión</a></li>
            </ul>
          </div>`;
        $("#userContainer").append(html);
      }
    }
  } else {
    alert("El navegador no posee localStorage");
  }
});
