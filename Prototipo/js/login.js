$(document).ready(function () {
    if (typeof Storage !== "undefined") {
      let usuarios = JSON.parse(localStorage.getItem("usuarios"));
      let loggedIn = usuarios.find((usuario) => usuario.logged === true);
      if (loggedIn !== undefined) {
        window.location.replace("menu.html");
      } else {
        $("#login").validate({
          rules: {
            username: {
              required: true,
            },
            password: {
              required: true,
            },
          },
          messages: {
            username: {
              required: "Debe ingresar su username",
            },
            password: {
              required: "Debe ingresar su contraseña",
            },
          },
          submitHandler: function () {
            let found = usuarios.find(
              (usuario) => usuario.username === $("#username").val()
            );
            if (found !== undefined) {
              if (found.password === $("#password").val()) {
                usuarios = usuarios.map((usuario) => {
                  if (usuario === found) {
                    usuario.logged = true;
                  }
                  return usuario;
                });
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                window.location.replace("menu.html");
              } else {
                alert("Usuario o contraseña incorrectos");
              }
            } else {
              alert("Usuario inexistente");
            }
          },
        });
      }
    } else {
      alert("El navegador no posee localStorage");
    }
  });
  