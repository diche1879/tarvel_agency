const express = require('express');
const app = express();

const travels = require('./data/travels.json');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Función unica para cada página de viaje
// se pasan tres parametro donde el travelId es el id del viaje que se quiere mostrar
// Se toma desde la url y sería la pagina de direccion que se considera como un parametro
const travelPage = (req, res, travelId) => {
    const travel = travels.find((travel) => travel.id === travelId);
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
};

// Ruta para la página principal
app.get('/', (req, res) => {
    travelPage(req, res, "");
});

// Ruta dinámica para las páginas de destinos
//recupera el parametro de la url y lo pasa a la función travelPage
app.get('/:destinacion', (req, res) => {
    const destinacion = req.params.destinacion;
    travelPage(req, res, destinacion);
});

/* app.get('/', (req, res) => {
    const travel = travels.find((travel) => travel.id == "");
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
});
app.get('/maldivas', (req, res) => {
    const travel = travels.find((travel) => travel.id == "maldivas");
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
});

app.get('/egipto', (req, res) => {
    const travel = travels.find((travel) => travel.id == "egipto");
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
});
app.get('/nuevayork', (req, res) => {
    const travel = travels.find((travel) => travel.id == "nuevayork");
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
});
app.get('/venecia', (req, res) => {
    const travel = travels.find((travel) => travel.id == "venecia");
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
});

app.get('/vietnam', (req, res) => {
    const travel = travels.find((travel) => travel.id == "vietnam");
    if (travel) {
        res.render('index', {
            id: travel.id,
            lugar: travel.lugar,
            nombre: travel.nombre,
            descripcion: travel.descripcion,
            precio: travel.precio,
            img: travel.img
        });
    } else {
        res.status(404).send('Elemento de viaje no encontrado');
    }
}); */


app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`);
});
