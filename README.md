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

## Modo funcional

Canvas actualmente cuenta con servidores en linea para el usuario (vinculadas con Supabase)

---

## Contribuir

1. Crea un fork del repositorio.
2. Trabaja en una rama descriptiva: `feature/nombre-del-cambio`.
3. Abre un Pull Request contra `main` con descripción clara de los cambios.
4. Para cambios en el esquema de BD, actualiza también `supabase_schema.sql`.

---

## Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
