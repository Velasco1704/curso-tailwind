# ¿Cómo funciona Tailwind? Y otros frameworks de CSS

[Project Page](https://snazzy-profiterole-8dc10c.netlify.app/)

Los frameworks de CSS son herramientas fundamentales para agilizar el desarrollo de interfaces web. Tailwind se destaca como un framework utility-first, diseñado para eliminar la necesidad de utilizar CSS convencional, permitiendo una personalización completa a través de clases y orientándose a utilidades. A diferencia de otros frameworks como Bootstrap, centrado en componentes con poca personalización, o Material UI, basado en el tema de Material y un sistema de diseño, Tailwind destaca por su enfoque altamente personalizable y modular. Bulma, otro competidor, ofrece modularidad y personalización a través de la importación selectiva de archivos y la creación de variables en SASS, basándose en Flexbox para la maquetación. En resumen, cada framework tiene sus características distintivas, pero la flexibilidad de Tailwind lo posiciona como una opción versátil y adaptable en el panorama de desarrollo web.

## Mobile First y Utility First

- **Mobile First** → Pensado principalmente para mejorar la experiencia de usuario. Permite identificar las partes más importantes de nuestro proyecto. En otras palabras, prioriza el desarrollo pensando en los dispositivos móviles.
- **Utility First** → Basado en utilidades el cual permite tener una estructura más limpia de nuestros estilos, el desarrollo es más rápido ya que todo se trabaja dentro del mismo archivo. En otras palabras, es la forma en que se nombran y se crean las clases de estilos, es decir, son clases descriptivas de la utilidad que nos dan. Se trata de construir componentes a partir de clases con nombres descriptivos.

## Directivas de Tailwind

**Directiva** es una instrucción que utiliza **Tailwind** para insertar código en el archivo final de css que genera. Esto inyecta los estilos base de **Tailwind** y cualquier estilo base registrado por plugins, también inyecta las clases de componentes de Tailwind y cualquier clase de componente registrado por los plugins**Base y componentes**.

- **@tailwind base**: Se encarga de inicializar todos los elementos HTML sin estilos, Es decir que un botón no va a tener estilos de botón y solo va a parecerse a un texto, o que un hipervínculo no va a tener decoraciones, entre otras cosas
-
- **@tailwind component**: Permite acceder a todas las clases de tailwind enfocadas a componentes, por ejemplo para un botón o similares.
- **@tailwind utilities**: Son todos los estilos de tailwind y el núcleo del mismo, nos permite accede a clases como bg-red-500.

Las directivas las podemos identificar fácilmente ya que llevan un @ antes del nombre, revisando la documentación de Tailwind nos encontramos con:

- **@tailwind screens** Nos va a servir para modificar esos breakpoints y customizarlos como nosotros queramos, sin embargo Tailwind ya cuenta con breakpoints definidos los cuales son:

  - small: ‘sm’ 640px (Usado para dispositivos móviles)
  - medium: ‘md’ 768px (Usado para una tablet)
  - large: ‘lg’ 1024px (Usado para desktop)
  - extra-large: ‘xl’ 1280px (Usado para pantallas más grandes)

- **@apply**:Se utiliza para aplicar una serie de utilidades tailwind en un selector css específico. En este caso podemos aplicar una serie de utilidades para una clase botón.

```css
.btn {
  @apply py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold;
}
```

- **@layer**:Permite decir a que directiva o capa de tailwind(base,component,utilities) pertenecen las utilidades tailwind que fueron seleccionadas con la directiva apply. Por ejemplo, si queremos que por defecto nuestros headers tengan un cierto estilo cuando usamos tailwind, puede verse de esta forma.

```css
@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}
```

- **@variants**: Podemos generar responsive, hover, focus, active y otras variantes de nuestras propias utilidades envolviendo sus definiciones en la variante. .
- **@responsive**: Podemos generar variantes receptivas de nuestras propias clases envolviendo sus definiciones en la directiva.
- **screen()**: Esta función acepta un nombre de pantalla como md y genera la expresión de característica de medios correspondiente .
- **theme()** Esta función se utiliza para acceder a los valores de configuración de Tailwind mediante la notación de puntos.
- **@config**: Esta directiva permite especificar cual es el archivo de configuración que tailwind utilizará para compilar el archivo CSS. Esto es muy útil cuando usamos proyectos que necesitan varios archivos de configuración para diferentes archivos CSS. Por ejemplo si tenemos estilos distintos en la vista de un admin y del sitio base. Algo muy importante es no poner esta directiva antes de las declaraciones de importación porque es posible que no se apliquen estilos correctamente debido a que si estás usando postcss-import, tus declaraciones @import deben venir antes de @config para que todo funcione correctamente, ya que postcss-import sigue estrictamente las especificaciones CSS que requieren que las declaraciones @import precedan a cualquier otra regla en el archivo.

```css
@config "./tailwind.site.config.js";
@config "./tailwind.admin.config.js";
```

## Paleta de colores extendida

```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
}
```

## Medidas y Breakpoints

Los Breakpoint son las medidas de anchura que utilizamos para el diseño responsivo. Con esas medidas aplicamos los estilos CSS con los tamaños concretos y definidos por las media queries. Con otras palabras, los puntos de ruptura son saltos en los que la pantalla va a cambiar de layout. . Los Breakpoints más comunes son:

- **320px** para dispositivos móviles, en tailwind sera sm.
- **768px** para tablets, en tailwind ser md.
- **1280px** para pantallas de computador, en tailwind ser lg.

```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      /* => @media (min-width: 640px) { ... } */

      'md': '768px',
       /* => @media (min-width: 768px) { ... } */

      'lg': '1024px',
       /* => @media (min-width: 1024px) { ... } */

      'xl': '1280px',
       /* => @media (min-width: 1280px) { ... } */

      '2xl': '1536px',
       /* => @media (min-width: 1536px) { ... } */
    }
  }
}
```

## Finalize este curso en 7h
