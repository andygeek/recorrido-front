# Recorrido-front

Recorrido front es un proyecto, con el que podremos crear nuestras alertas de precios usando el API público de [Recorrido.cl](https://www.recorrido.cl/en). Esta plataforma está construida bajo [Vuejs 2](https://vuejs.org/) y [TypeScript](https://www.typescriptlang.org/) en sus cimientos y para los gráficos se utilizó la librería [Chart.js](https://www.chartjs.org/).

Se trató de ser lo más modular posible por lo que se trabajo usando componentes para los campos del formulario string, select y number. Además de un componente para el Navbar y la para el formulario de Creación y Edición de las alertas de precios.

Las vistas se componen de las vistas para el login y registro de usuario Login, Signup y las vistas de ambiente que cubren Dashboard vista donde mostramos las alerta creadas del usuario. AlertDetail donde mostramos el detalle de cada alerta. Y ExternalView que es una vista donde renderizamos la vista externa que debemos usar de recorrido.cl.

## 1. Casos de uso

<img src="https://imgur.com/MsN3hXE.png" width="400"/>

## 2. Page flow

<img src="https://imgur.com/LmsO7by.png" width="600"/>

## 3. Instalación del proyecto

Para instalar y probar este proyecto solo basta con clonar el repositorio de git y usar el siguiente comando. Es importante tener el administrador de paquetes Yarn o NPM instalado en tu computadora.

```
yarn
```

Luego podemos ejecutarlo de forma local usando el siguiente comando.


```
yarn run serve
```

Tenemos alunas pruebas unitarias creadas, si quieres correrlas utiliza el siguiente comando.

```
yarn run test:unit
```

## 4. Demos

Esto es una demo del funcionamiento del front. 

### Login de usuario
Algunas validaciones aún están pendientes.
![primero](https://user-images.githubusercontent.com/34007326/134978210-2e2aeebd-e0cb-4f5e-84d5-dc933051d457.gif)

### Crud de alerta de precio
![segundo](https://user-images.githubusercontent.com/34007326/134978320-55f46f1c-eb20-4e7e-90f8-93c580c34dd5.gif)

### Gráfico de precio mínimo
Este gráfico se logró introduciendo precios mínimos en la base de datos directamente. El API de prueba no tenía registros para fechas actuales.

![tercero](https://user-images.githubusercontent.com/34007326/134978181-82821c79-5f56-447c-a81a-e82f6b8696d7.gif)


