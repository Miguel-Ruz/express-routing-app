const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Configura el motor de plantillas para renderizar vistas HTML
app.set('view engine', 'ejs'); // Puedes usar EJS u otro motor de plantillas

// Establece la ubicación de tus archivos de vista
app.set('views', __dirname);

//servir archivos estaticos
app.use(express.static('public')); // 'public' es el nombre de tu carpeta de archivos estáticos


// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');

// Define tus rutas y lógica de manejo aquí
// Ruta de inicio
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Ruta de contacto
app.get('/contacto', (req, res) => {
    res.render('contacto.ejs');
});

// Ruta de acerca de
app.get('/acerca', (req, res) => {
    res.render('acerca.ejs');
});

app.listen(port, () => {
    console.log(`El servidor está funcionando en http://localhost:${port}`);
});
