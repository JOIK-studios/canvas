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
  }

  document.addEventListener("DOMContentLoaded", init);
})();
