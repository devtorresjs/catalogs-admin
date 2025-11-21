# Test Angular

## Descripción del Proyecto

Esta aplicación está desarrollada en **Angular 19** siguiendo buenas prácticas de arquitectura. La estructura del proyecto se organiza de manera que separa las responsabilidades según su ámbito, facilitando mantenimiento y escalabilidad.

## Estructura del Proyecto a nivel negocio

- **Business**: Contiene las abstracciones.  
- **Models**: Incluye únicamente los modelos que se van a utilizar dentro de la aplicación, manteniendo un estándar de datos consistente.  
- **Repositories**: Fuente de datos para realizar requests, incluyendo entidades, mappers y providers. Esto permite aislar la lógica del negocio de posibles cambios en la fuente de datos.  
- **Entities**: Representan la estructura exacta que envía o recibe el servicio externo.  
- **Mappers**: Transforman datos entre entidades y modelos utilizados en la aplicación.  
- **Providers**: Permiten que los casos de uso se mantengan encapsulados y disponibles únicamente para los componentes que los necesitan (por ejemplo, `create-product`, `get-product`, `get-products`).  

## Ventajas de esta Arquitectura

- Si cambia algo en la fuente de datos, únicamente se deben actualizar los **repositories** y **mappers**, mientras que las reglas de negocio permanecen intactas.  
- Se mantiene un estándar de modelos, evitando conflictos en la lógica de negocio y reduciendo problemas de integración y conflictos de Git.  
- Aunque puede parecer que hay código repetido o estructuras redundantes, esta separación ayuda a la **escalabilidad** y al **mantenimiento a largo plazo**.

## Ejemplo Práctico

Para el caso de uso `create-product`:

1. Se modificó intencionalmente el modelo con propiedades en español.  
2. La entidad del repositorio se mantiene tal cual la envía el servicio externo.  
3. Si cambia el nombre de alguna propiedad, solo se afecta el **mapper** y la **entity**, sin impactar la lógica de negocio.  
4. El **provider** correspondiente (`CreateProductProvider`) encapsula el caso de uso, permitiendo que solo los componentes que lo requieren puedan ejecutarlo, manteniendo la lógica de negocio aislada y reutilizable.

## Tecnologías Utilizadas

- Angular 19  
- Angular Material (para componentes UI, sin depender de módulos de pago o externos inseguros)  

## Requisitos Previos

Antes de levantar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

- Node.js v18 o superior  
- npm v9 o superior  
- Angular CLI v19  
- Navegador moderno (Chrome, Edge o Firefox)  

## Configuración de Hosts de Servicios

Los hosts de los servicios se pueden modificar en el archivo `src/environments/environment.ts`.  
Simplemente cambia la URL de los endpoints según sea necesario para cada entorno.

## Cómo Levantar el Proyecto

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
ng serve

