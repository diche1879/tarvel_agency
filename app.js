// Importaciones necesarias
const express = require('express');
// Inicialización de Express
const app = express();

// creo una variable con los datos del Json
const travels = require('./data/travels.json');

// Puerto de escucha
const PORT = 3000;

// Configuración de Express y su motor de plantillas ejs
app.set('view engine', 'ejs');
// ruta para la carpeta donde se encuentran los ficheros ejs
app.set('views', __dirname + '/views');
// uso y ruta para/de la carpeta de los ficheros estáticos
app.use(express.static(__dirname + '/public'));

travels.forEach((travel) => {
    app.get(`/${travel.id}`, (req, res) => {
        res.render('index', {
            travels: travels,
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    });
});

app.use((req, res) => {
    res.status(404).render('error404')
});

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`);
});
