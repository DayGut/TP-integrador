const express =require('express');
const app = express();

const rutaAuto =require ("./routes/autos");
const rutaHome = require ("./routes/home");
const rutaMarcas= require("./routes/marcas");
const rutaSucursal = require("./routes/sucursales")//toma el dato de todo el contenido de sucursales en este caso


app.listen(3030, ()=>console.log('El servidor esta levantado'))
app.use('/', rutaHome);//define la url luego indica donde esta el contenido dentro de la variable const rutaHome
app.use('/sucursales', rutaSucursal);
app.use('/marcas', rutaMarcas);
app.use('/autos', rutaAuto); 


