# Contador de clics con React

Aplicación sencilla de contador desarrollada como ejercicio práctico de aprendizaje de React.

La aplicación permite incrementar un contador mediante un botón y reiniciarlo cuando sea necesario.

## Contexto del proyecto

Este proyecto fue realizado como ejercicio de aprendizaje siguiendo una clase/tutorial guiado de React.

La implementación se realizó paso a paso a partir de la explicación del tutor, con el objetivo de familiarizarme con la estructura de una aplicación React y practicar conceptos fundamentales del framework.

## Conceptos practicados

- Componentes funcionales en React
- Manejo de estado mediante `useState`
- Manejo de eventos mediante `onClick`
- Uso de props para comunicar información y funciones entre componentes
- Actualización dinámica de la interfaz
- Separación de componentes
- Organización de estilos CSS
- Estructura básica de una aplicación React

## Funcionamiento

La aplicación cuenta con:

- **Botón "Clic"**: incrementa el contador en una unidad.
- **Botón "Reiniciar"**: devuelve el contador a cero.
- **Componente Contador**: muestra el valor actual.
- **Componente Botón**: reutiliza la lógica visual y de interacción de los botones.

## Tecnologías utilizadas

- JavaScript
- React
- HTML
- CSS
- Create React App

## Estructura principal

```text
src/
├── componentes/
│   ├── boton.js
│   └── contador.js
├── hojas-de-estilo/
│   ├── boton.css
│   └── contador.css
├── imagenes/
├── App.js
├── App.css
├── index.css
└── index.js

## Ejecución local

1. Clonar el repositorio
git clone https://github.com/RicardoCorzo/contador-de-clics_con_react.git

2. Entrar en la carpeta del proyecto
cd contador-de-clics_con_react

3. Instalar las dependencias
npm install

4. Ejecutar la aplicación
npm start

La aplicación se abrirá normalmente en:
http://localhost:3000

## Nota
Este repositorio corresponde a un ejercicio de aprendizaje guiado.
Se publica como evidencia de práctica con React y JavaScript y como parte de mi proceso de formación en desarrollo de software.
