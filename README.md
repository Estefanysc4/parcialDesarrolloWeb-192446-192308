# parcialDesarrolloWeb-192446-192308
# ☕ Chispas de Café  
 
El negocio elegido es una **cafetería virtual**, donde los usuarios pueden iniciar sesión, navegar por el menú y comunicarse mediante un formulario de contacto.  


## 📌 Fragmentos, plantillas y Web Components  

### 🔹 Fragmentos  
  
- `header.html` contiene el nombre del negocio.  
- `footer.html` contiene los derechos reservados.  
- `sidebar.html` contiene el menú de navegación.  



### 🔹 Plantillas (`<template>`)   
- Se creó una plantilla de producto en el HTML.  
- Con JavaScript se clonan y se generan varios productos dinámicamente.  

 Esto facilita mostrar varios elementos con el mismo formato .  

## 🔹 Web Components  
En este proyecto:  
- Se creó el componente `<product-card>`.  
- Este recibe atributos como **nombre, precio, descripción e imagen**.  
- Se encapsula con **Shadow DOM** para que los estilos no interfieran con el resto de la página.  

Esto mejora la reutilización y la escalabilidad del proyecto.  


🔑 Formulario de inicio de sesión  

- Se implementó un **login simple** en `inicio.html`.  
- El usuario debe ingresar **nombre de usuario y contraseña**.  
- Validación hecha con JavaScript en `login.js`:  
  - Usuario: `admin`  
  - Contraseña: `cafe123`  
- Si las credenciales son correctas → redirige a `index.html`.  
- Si son incorrectas → muestra un mensaje de error.  

este login usa credenciales quemadas en el código



## ✅ Buenas prácticas aplicadas  

1. **Estructura modular del proyecto**  
   - Archivos separados en carpetas: `css/`, `js/`, `components/`, `data/`.  
   - Código más limpio, organizado y fácil de mantener.  

2. **Nombramiento consistente**  
   - JavaScript → variables y funciones en `camelCase`.  
   - CSS → clases en `kebab-case`.  

3. **Responsabilidades separadas**  
   - `login.js` → validación de inicio de sesión.   
   - `components.js` → carga de fragmentos (header, footer, sidebar).  

