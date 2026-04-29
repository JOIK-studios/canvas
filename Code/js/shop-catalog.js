(function () {
  const ITEMS = [
    {
      id: "pixels_50",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg>',
      logo: "PX-50",
      name: "Pack Pixeles x50",
      price: 20,
      desc: "Pack rapido para publicar piezas pequenas.",
      gives: ["+50 px de inventario"]
    },
    {
      id: "pixels_180",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M4 12h16M12 4v16"/></svg>',
      logo: "PX-180",
      name: "Pack Pixeles x180",
      price: 65,
      desc: "Inventario grande para sesiones largas.",
      gives: ["+180 px de inventario"]
    },
    {
      id: "speed_upgrade",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h11"/><path d="M14 4l4 3-4 3"/><path d="M17 17H6"/><path d="M10 14l-4 3 4 3"/></svg>',
      logo: "SPD",
      name: "Upgrade Recarga",
      price: 50,
      desc: "Baja el tiempo de recarga en 5s hasta minimo 10s.",
      gives: ["-5s de recarga", "Minimo 10s"]
    },
    {
      id: "charge_now",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      logo: "NOW",
      name: "Carga Instantanea",
      price: 32,
      desc: "Recupera una carga al instante.",
      gives: ["+1 carga ahora"]
    },
    {
      id: "palette_neon",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="12" cy="16" r="3"/><path d="M8 11l4 2 4-2"/></svg>',
      logo: "CLR",
      name: "Paleta Neon",
      price: 48,
      desc: "Desbloquea una paleta exclusiva para tus proximos trazos.",
      gives: ["Paleta Neon", "Se guarda en tu cuenta"]
    },
    {
      id: "recharge_chip",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="7" width="10" height="10"/><path d="M12 9v6M9 12h6"/></svg>',
      logo: "CHIP",
      name: "Microchip de Recarga",
      price: 38,
      desc: "Ajusta tu nucleo para recargar mas rapido.",
      gives: ["-2s de recarga", "Minimo 8s"]
    },
    {
      id: "max_charge_plus",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><path d="M5 5l14 14" opacity=".35"/></svg>',
      logo: "MAX+",
      name: "Modulo de Carga Extra",
      price: 70,
      desc: "Amplia el tope de cargas para sesiones mas largas.",
      gives: ["+1 carga maxima", "+1 carga al comprar", "Tope: 10"]
    },
    {
      id: "artist_box",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 6V4h8v2"/><path d="M12 10v5"/></svg>',
      logo: "BOX",
      name: "Artist Box",
      price: 95,
      desc: "Caja premium para empujar una tanda completa de obras.",
      gives: ["+260 px", "+2 cargas"]
    },
    {
      id: "editor_grid_plus",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
      logo: "GRID+",
      name: "Upgrade Editor +8",
      price: 84,
      desc: "Aumenta el tamano de tu editor para dibujar con mas pixeles por lado.",
      gives: ["+8 pixeles por lado", "Maximo 32x32"]
    }
  ];

  function getById(id) {
    return ITEMS.find((item) => item.id === id) || null;
  }

  window.CanvasApp = window.CanvasApp || {};
  window.CanvasApp.ShopCatalog = {
    ITEMS,
    getById
  };
})();
