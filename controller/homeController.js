const fs = require ("fs"); //fs metodo local 
let dbconcesionaria = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))//parseo el JSON(traduce a Javascript), readfileSync(metodo de fs)

const homeController = {//va almacenar los metodos que voy a requerir en rutas
    index:(req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("BIENVENIDO A NUESTRO  CENTRO DE SUCURSALES :" + '\n\n');//imprime por pantalla
        res.write('Estas son nuestras sucursales \n\n')
        dbconcesionaria.forEach((element)=>{//recorre el JSON
            res.write('' + element.sucursal + '\n\n')
        })
        res.end()
        }

    }


module.exports = homeController