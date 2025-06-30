const btnAbrir = document.querySelector(".ingresar-registrarme");
const modal = document.getElementById("login-modal");
const btnCerrar = document.getElementById("btn-cerrar");
const btnLogin = document.getElementById("btn-login");
const usuarioNav = document.querySelector(".ingresar-registrarme");

// Si ya está logueado, mostramos el nombre
if (localStorage.getItem("usuario")) {
    mostrarUsuario(localStorage.getItem("usuario"));
}

btnAbrir.addEventListener("click", () => {
    if (localStorage.getItem("usuario")) {
        alert("Ya estás logueado.");
    } else {
        modal.classList.remove("oculto");
    }
});

btnCerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
});

btnLogin.addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario && password) {
        localStorage.setItem("usuario", usuario);
        mostrarUsuario(usuario);
        modal.classList.add("oculto");
    } else {
        alert("Completa todos los campos.");
    }
});

function mostrarUsuario(usuario) {
    usuarioNav.innerHTML = `
        <img class="imagen-user" src="img/user (1).png" alt="Imagen Usuario">
        ${usuario}
    `;
}
