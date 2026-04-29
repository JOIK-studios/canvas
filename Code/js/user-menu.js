(function () {
  function getStoredUser() {
    try {
      return JSON.parse(localStorage.getItem("canvas_user") || "null");
    } catch {
      return null;
    }
  }

  function updateUserLabel() {
    const emailNode = document.getElementById("userEmail");
    if (!emailNode) return;

    const user = window.CanvasApp?.currentUser || getStoredUser();
    const username = user?.user_metadata?.username || user?.email?.split("@")[0] || "Usuario";
    emailNode.textContent = username;
  }

  function initUserMenu() {
    const btn = document.getElementById("userMenuBtn");
    const menu = document.getElementById("userDropdown");
    if (!btn || !menu) return;

    updateUserLabel();

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      menu.classList.toggle("hidden");
    });

    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    document.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  }

  document.addEventListener("DOMContentLoaded", initUserMenu);
})();
