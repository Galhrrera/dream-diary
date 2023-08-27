<!-- # dream-diary
Actividad evaluativa para el módulo 2 del curso de aplicaciones móviles 2023-20: Una aplicación híbrida -->
# Dream Diary App

Esta es una aplicación híbrida desarrollada como actividad evaluativa para el módulo 2 del curso de aplicaciones móviles 2023-20 en el programa de ingeniería de sistemas e informática. La aplicación permite a los usuarios registrar y almacenar sus sueños en un diario virtual, así como acceder a ellos y leerlos.

## Instrucciones de Ejecución

Sigue estos pasos para ejecutar la aplicación en cualquier ordenador después de clonar el repositorio:

### 1. Clonar el Repositorio

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio en tu ordenador:

```
git clone https://github.com/galhrrera/dream-diary.git
```
### 2. Instala las dependencias
Navega a la carpeta del proyecto:
```
cd dream-diary
```

Luego, instala las dependencias necesarias ejecutando:
```
npm install
```

### 3. Ejecuta en modo de desarrollo
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando en la raíz de proyecto:
```
npm run dev
```

Esto limpiará el directorio de distribución, compilará los archivos fuente y lanzará un servidor de desarrollo local.

### 4. Ejecuta en modo de producción
Para ejecutar la aplicación en modo de producción, utiliza el siguiente comando en la raíz de proyecto:
```
npm run prod
```

Esto limpiará el directorio de distribución, compilará y optimizará los archivos fuente, y generará una carpeta **public** listo para ser desplegado.

### 5. Acceder a la aplicación
Una vez que el servidor de desarrollo o de producción esté en funcionamiento, abre tu navegador web y accede a la siguiente URL:
```
http://localhost:1234
```

Esto te llevará a la página principal de la aplicación.

## Dependencias de la aplicación
Las siguientes dependencias se utilizan en este proyecto:

- **sass v1.66.1**: Compilador de Sass para estilos.
- **rimraf v5.0.1**: Herramienta para eliminar directorios de manera recursiva y segura.
- **parcel v1.12.5**: Empaquetador de aplicaciones web para el desarrollo y la construcción.