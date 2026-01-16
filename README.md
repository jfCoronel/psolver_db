# Calener BD

Sistema de gestión de base de datos de problemas para pSolver, construido con React, TypeScript y shadcn/ui v2.

## Características

- 📊 **Tabla de problemas** con ordenamiento por columnas
- 🔍 **Filtrado avanzado** por nombre, autor, materia y categoría
- 📱 **Diseño responsive** adaptado a todos los dispositivos
- 🌙 **Modo oscuro** con selector de tema (claro/oscuro/sistema)
- 🌍 **Internacionalización** con soporte para español e inglés
- ⚡ **TypeScript** para un código más seguro y mantenible
- 🎨 **shadcn/ui v2** con componentes modernos
- 🔄 **Gestión de estado** con Zustand

## Tecnologías

- **React 19** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS v4** - Framework de estilos
- **shadcn/ui v2** - Biblioteca de componentes
- **Zustand** - Gestión de estado
- **Lucide React** - Iconos

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jfCoronel/psolver_db.git
cd psolver_db

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Estructura del proyecto

```
src/
├── components/          # Componentes de React
│   ├── ui/             # Componentes base de shadcn/ui
│   ├── Logo.tsx
│   ├── LanguageSelector.tsx
│   ├── ProblemDetail.tsx
│   ├── ProblemsFilters.tsx
│   └── ProblemsTable.tsx
├── hooks/              # Custom hooks
│   └── use-theme.tsx
├── store/              # Estado global con Zustand
│   └── useStore.ts
├── types/              # Definiciones de tipos TypeScript
│   └── index.ts
├── lib/                # Utilidades
│   └── utils.ts
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada

public/
├── data/               # Datos JSON
│   └── problems.json
├── locales/            # Archivos de traducción
│   ├── es.json
│   └── en.json
└── logo_psolver.png    # Logo de la aplicación
```

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Características detalladas

### Filtrado de problemas
Los usuarios pueden filtrar problemas por:
- Nombre
- Autor
- Materia
- Categoría

### Ordenamiento
Todas las columnas de la tabla son ordenables:
- Click para ordenar ascendente
- Segundo click para ordenar descendente
- Indicadores visuales del estado de ordenamiento

### Vista de detalles
Al hacer click en cualquier fila, se expande una vista detallada mostrando todos los campos del problema.

### Tema
- Modo claro
- Modo oscuro
- Modo sistema (detecta las preferencias del sistema operativo)
- Preferencia guardada en localStorage

### Internacionalización
Soporte completo para español e inglés con archivos JSON de traducción.

## Licencia

Este proyecto es de código abierto.

## Autor

Juan Francisco Coronel
