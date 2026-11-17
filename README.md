# 🎬 AluraFlix - Grupo 6

**AluraFlix** es una aplicación web interactiva diseñada para organizar, visualizar y gestionar tus videos favoritos por categorías de programación. Este proyecto fue desarrollado en equipo como parte del Challenge de Front-End de **Alura Latam** y el programa **Oracle Next Education (ONE)**.

---

## 🚀 Características Principales

- **Visualización por Categorías:** Explora videos organizados de manera clara por temáticas (Front End, Back End, Innovación, Gestión, etc.).
- **Gestión Completa de Videos (CRUD):** 
  - ➕ **Crear:** Añadir nuevos videos mediante un formulario interactivo con validación de campos.
  - ✏️ **Editar:** Modificar los datos de cualquier video directamente desde una ventana modal flotante.
  - 🗑️ **Eliminar:** Borrar videos de la lista de manera instantánea.
- **Diseño Exclusivo y Responsivo:** Interfaz moderna y estilizada adaptable a pantallas de ordenadores y dispositivos móviles.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando el siguiente ecosistema de herramientas:

- **React.js (v18+)** - Biblioteca principal de JavaScript para la construcción de interfaces basadas en componentes.
- **Vite** - Herramienta de empaquetado ultra rápida para el entorno de desarrollo.
- **Styled Components** - Biblioteca para escribir código CSS directamente dentro de los componentes de React (CSS-in-JS), permitiendo estilos dinámicos y reutilizables.
- **React Router DOM** - Para gestionar la navegación fluida entre la página de inicio (Home) y el formulario de registro (Nuevo Video).
- **JSON-Server** - API REST local simulada para gestionar la persistencia de datos (lectura, guardado, edición y borrado en un archivo `db.json`).

---

## 📦 Instalación y Configuración Local

Sigue estos pasos para clonar el repositorio y ejecutar el proyecto en tu entorno local:

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org) (versión 16 o superior).

### Pasos para la ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   cd aluraflix-grupo6
   ```

2. **Instalar las dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Iniciar la Base de Datos (JSON-Server):**
   Para que la aplicación pueda leer y modificar los videos, debes arrancar el servidor simulado ejecutando:
   ```bash
   npm run server
   ```
   *Nota: Esto levantará la API en el puerto `http://localhost:3000` consumiendo los datos del archivo `db.json`.*

4. **Iniciar el entorno de desarrollo de React:**
   En una nueva terminal, arranca el servidor de Vite:
   ```bash
   npm run dev
   ```
   Haz clic o abre [http://localhost:5173](http://localhost:5173) en tu navegador para interactuar con AluraFlix.

---

## 👥 Miembros del Grupo 6

Agradecemos el esfuerzo de todo el equipo técnico para hacer posible este proyecto:

---

## 📝 Licencia

Proyecto desarrollado exclusivamente con fines educativos bajo el marco de la alianza Alura Latam + Oracle.