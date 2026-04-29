(function () {
  function gridSize(grid) {
    if (!Array.isArray(grid) || !grid.length || !Array.isArray(grid[0])) return 16;
    return Math.max(1, grid.length);
  }

  function drawThumb(canvas, grid) {
    const ctx = canvas.getContext("2d");
    const size = gridSize(grid);
    const cell = canvas.width / size;
    ctx.imageSmoothingEnabled = false;
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        ctx.fillStyle = grid[y][x];
        ctx.fillRect(x * cell, y * cell, cell, cell);
      }
    }
  }

  function card(creation) {
    const item = document.createElement("article");
    item.className = "art-card art-square reveal";
    item.tabIndex = 0;

    const thumb = document.createElement("canvas");
    thumb.width = 220;
    thumb.height = 220;
    thumb.className = "thumb square";
    drawThumb(thumb, creation.grid);

    const title = document.createElement("h2");
    title.className = "art-square-title";
    title.textContent = creation.title;

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${creation.author} · Likes ${creation.likes} · Boost ${creation.boosts}`;

    item.addEventListener("click", () => {
      window.location.href = `art.html?id=${encodeURIComponent(creation.id)}`;
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = `art.html?id=${encodeURIComponent(creation.id)}`;
      }
    });

    item.append(thumb, title, meta);
    return item;
  }

  function render() {
    const state = window.CanvasApp.Store.getState();
    const empty = document.getElementById("emptyState");
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";

    if (!state.creations.length) {
      empty.hidden = false;
      return;
    }

    empty.hidden = true;
    state.creations.forEach((creation) => {
      grid.appendChild(card(creation));
    });

    window.CanvasApp.UI.updateTopStats();
    window.CanvasApp.UI.applySequentialMotion(grid.parentElement || document);
    requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((node, i) => {
        node.style.transitionDelay = `${i * 45}ms`;
        node.classList.add("visible");
      });
    });
  }

  function init() {
    window.CanvasApp.UI.initCommon();
    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
