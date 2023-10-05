const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

// Configuración del motor de plantillas para renderizar vistas HTML
app.set('view engine', 'ejs'); 

// Ubicación de archivos de vista
app.set('views', __dirname);

//servir archivos estaticos
app.use(express.static('public'));


// Configuración el motor de plantillas EJS
app.set('view engine', 'ejs');

//Rutas y lógica de manejo
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
