const btnAbrir = document.getElementById("abrir-login");
const modal = document.getElementById("login-modal");
const btnCerrar = document.querySelector(".cerrar-btn");
const btnLogin = document.getElementById("btn-login");
const usuarioNav = document.getElementById("abrir-login");

if (localStorage.getItem("usuario")) {
    mostrarUsuario(localStorage.getItem("usuario"));
}

btnAbrir.addEventListener("click", (e) => {
    e.preventDefault();
    if (localStorage.getItem("usuario")) {
        alert("Ya estás logueado.");
    } else {
        modal.classList.remove("oculto");
    }
});

btnCerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
});

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

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
        <button id="btn-logout" style="
          margin-left: 10px;
          background: #00aaff;
          border: none;
          color: white;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
        ">Cerrar sesión</button>
    `;
    usuarioNav.style.pointerEvents = "auto";
    usuarioNav.style.cursor = "pointer";

    // Escuchar el botón de cerrar sesión
    const btnLogout = document.getElementById("btn-logout");
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("usuario");
        usuarioNav.innerHTML = `
            <img class="imagen-user" src="img/user (1).png" alt="Imagen Usuario">
            Iniciar Sesión
        `;
        usuarioNav.style.pointerEvents = "auto";
        usuarioNav.style.cursor = "pointer";
    });
}
