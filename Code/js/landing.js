(function () {
  function init() {
    const user = localStorage.getItem("canvas_user");
    if (user) {
      window.location.replace("app.html");
      return;
    }

    if (window.CanvasApp?.UI) {
      window.CanvasApp.UI.initCommon();
    }

    const loginLinks = document.querySelectorAll('a[href="auth.html"]');
    if (user) {
      loginLinks.forEach((link) => {
        if (link.textContent.toLowerCase().includes("entrar") || link.textContent.toLowerCase().includes("sesi")) {
          link.setAttribute("href", "app.html");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
