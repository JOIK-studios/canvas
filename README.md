# Canvas

**Canvas** es una plataforma social de pixel art estilo r/Place, donde los usuarios crean piezas de arte en cuadrícula, las publican en una galería compartida y compiten por visibilidad en el **Open Canvas** — un mural colaborativo de 500 × 500 píxeles.

---

## Características principales

| Módulo | Descripción |
|---|---|
| **Editor** | Cuadrícula configurable (16 – 32 × 16 – 32) con paleta de 35 colores |
| **Open Canvas** | Mural global colaborativo de 500 × 500, actualización en tiempo real |
| **Galería** | Feed de creaciones públicas con likes, boosts, comentarios y remix |
| **Tienda** | Compra de paquetes de píxeles con las monedas de la cuenta |
| **Perfil** | Historial de creaciones, estadísticas y configuración de usuario |
| **Economía** | Sistema de monedas, inventario de píxeles y cargas de publicación |
| **Admin** | Panel de administración para gestión de la plataforma |
| **Temas** | Modo claro y oscuro con persistencia por usuario |

---

## Tecnologías

- **Frontend:** HTML5, CSS3 y JavaScript vanilla (sin frameworks)
- **Tipos:** TypeScript (`Code/ts/`) para definiciones de interfaces y store
- **Backend:** [Supabase](https://supabase.com/) — PostgreSQL, Auth y Row Level Security
- **Autenticación:** Email/contraseña + OAuth (Google, GitHub, etc.) vía Supabase; modo local de prototipo como fallback

---

## Estructura del proyecto

```
canvas/
├── Code/
│   ├── index.html          # Landing page pública
│   ├── auth.html           # Login / registro
│   ├── app.html            # Hub principal (requiere sesión)
│   ├── create.html         # Editor de pixel art
│   ├── gallery.html        # Galería de creaciones
│   ├── open-canvas.html    # Mural colaborativo global
│   ├── art.html            # Vista de detalle de una creación
│   ├── profile.html        # Perfil de usuario
│   ├── shop.html           # Tienda de píxeles
│   ├── shop-item.html      # Detalle de artículo de tienda
│   ├── ajustes.html        # Ajustes de cuenta
│   ├── shortcuts.html      # Atajos de teclado
│   ├── admin.html          # Panel de administración
│   ├── js/                 # Scripts de cada módulo
│   │   ├── auth.js         # Flujo de autenticación (Supabase / local)
│   │   ├── auth-check.js   # Guard de sesión para rutas protegidas
│   │   ├── create.js       # Lógica del editor
│   │   ├── gallery.js      # Carga y renderizado de galería
│   │   ├── openCanvas.js   # Mural colaborativo
│   │   ├── home.js         # Hub principal
│   │   ├── profile.js      # Perfil de usuario
│   │   ├── shop.js         # Tienda (listado)
│   │   ├── shop-catalog.js # Catálogo de paquetes
│   │   ├── shop-detail.js  # Detalle de compra
│   │   ├── admin.js        # Panel de admin
│   │   ├── settings.js     # Ajustes de cuenta
│   │   ├── shortcuts.js    # Atajos de teclado
│   │   ├── state.js        # Estado global de la app
│   │   ├── store.js        # Store persistente (localStorage)
│   │   ├── storage-optimizer.js  # Limpieza de almacenamiento local
│   │   ├── cleanup.js      # Utilidades de limpieza
│   │   ├── theme-init.js   # Inicialización del tema antes del render
│   │   ├── ui.js           # Utilidades de UI compartidas
│   │   ├── user-menu.js    # Menú de usuario en la topbar
│   │   └── landing.js      # Animaciones de la landing page
│   ├── ts/                 # TypeScript
│   │   ├── types.ts        # Interfaces y tipos de dominio
│   │   ├── supabase.ts     # Config del cliente Supabase
│   │   └── store.ts        # Store tipado con persistencia
│   ├── styles/
│   │   ├── main.css        # Estilos globales y componentes
│   │   └── auth.css        # Estilos específicos de autenticación
│   ├── images/
│   │   └── logo.svg        # Logotipo de Canvas
│   └── supabase_schema.sql # Esquema completo de la base de datos
├── LICENSE
├── README.md
└── SECURITY.md
```

---

## Base de datos (Supabase)

El esquema completo está en `Code/supabase_schema.sql`. Tablas principales:

| Tabla | Descripción |
|---|---|
| `profiles` | Perfiles de usuario (monedas, píxeles, preferencias) |
| `creations` | Piezas de pixel art (grid JSON, likes, boosts) |
| `creation_likes` | Relación usuario ↔ like |
| `comments` | Comentarios en creaciones |
| `boosts` | Boosts de visibilidad (coste en monedas) |
| `pixel_shop_orders` | Historial de compras de paquetes de píxeles |
| `creation_views` | Registro de visualizaciones |
| `open_canvas_events` | Eventos del mural colaborativo |

Row Level Security (RLS) habilitado en todas las tablas.

---

## Configuración y despliegue

### 1. Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com/) y crea un nuevo proyecto.
2. En el **SQL Editor** ejecuta el contenido de `Code/supabase_schema.sql`.
3. Copia la **URL del proyecto** y la **clave anónima** (`anon key`) desde *Project Settings → API*.

### 2. Inyectar credenciales

Canvas detecta las credenciales de Supabase en este orden de prioridad:

| Método | Cómo |
|---|---|
| Variable global JS | `window.CANVAS_SUPABASE_URL` y `window.CANVAS_SUPABASE_KEY` |
| Meta tags HTML | `<meta name="supabase-url" content="...">` en cada página |
| localStorage | Claves `canvas_supabase_url` y `canvas_supabase_key` |

Si no se detecta una configuración válida, la app activa el **modo local** (autenticación de prototipo sin backend remoto).

### 3. Servir los archivos

Sirve la carpeta `Code/` con cualquier servidor HTTP estático, por ejemplo:

```bash
# Python
python3 -m http.server 8080 --directory Code

# Node.js (npx serve)
npx serve Code
```

Abre `http://localhost:8080` en el navegador.

---

## Modo local (prototipo)

Cuando Supabase no está configurado, Canvas funciona en modo local:

- Las cuentas se almacenan en `localStorage` del navegador.
- El progreso (monedas, píxeles, creaciones) persiste solo en el dispositivo actual.
- No hay sincronización entre dispositivos ni funciones sociales en tiempo real.
- Útil para desarrollo y pruebas sin necesidad de backend.

---

## Contribuir

1. Crea un fork del repositorio.
2. Trabaja en una rama descriptiva: `feature/nombre-del-cambio`.
3. Abre un Pull Request contra `main` con descripción clara de los cambios.
4. Para cambios en el esquema de BD, actualiza también `supabase_schema.sql`.

---

## Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.