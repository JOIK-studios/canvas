(function () {
  function byId(id) {
    return document.getElementById(id);
  }

  function setStatus(message) {
    const node = byId("settingsStatus");
    if (!node) return;
    node.textContent = message || "";
  }

  function loadCurrentConfig() {
    const url = localStorage.getItem("canvas_supabase_url") || "";
    const key = localStorage.getItem("canvas_supabase_key") || "";
    const urlInput = byId("settingsSupabaseUrl");
    const keyInput = byId("settingsSupabaseKey");
    if (urlInput) urlInput.value = url;
    if (keyInput) keyInput.value = key;
  }

  function bindActions() {
    byId("settingsSaveBtn")?.addEventListener("click", () => {
      const url = (byId("settingsSupabaseUrl")?.value || "").trim();
      const key = (byId("settingsSupabaseKey")?.value || "").trim();

      if (!url || !key) {
        setStatus("Completa URL del servicio y clave pública para guardar.");
        return;
      }

      localStorage.setItem("canvas_supabase_url", url);
      localStorage.setItem("canvas_supabase_key", key);
      setStatus("Conexión guardada. Ya puedes usar vínculos de cuenta.");
    });

    byId("settingsClearBtn")?.addEventListener("click", () => {
      localStorage.removeItem("canvas_supabase_url");
      localStorage.removeItem("canvas_supabase_key");
      loadCurrentConfig();
      setStatus("Conexión eliminada.");
    });
  }

  function init() {
    window.CanvasApp.UI.initCommon();
    loadCurrentConfig();
    bindActions();
  }

  document.addEventListener("DOMContentLoaded", init);
})();