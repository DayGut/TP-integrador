const fs = require ("fs");
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));//parseo el JSON

const sucursalesController = {
    index:(req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('Bienvenidos a las sucursales \n\n');
        res.write('Estas son nuestras sucursales \n\n');
        db.forEach((element)=>{
          res.write('Sucursal : ' + element.sucursal)
          res.write('\n')
          res.write('Direccion : ' + element.direccion)
          res.write('\n')
          res.write('Telefono : ' + element.telefono)
          res.write('\n')
          res.write('--------------------------------\n')
          
        })
      res.end()
        
    },
    id : function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idSucursales = req.params.sucursal
        db.forEach(function(sucursal){
        if (sucursal.sucursal == idSucursales){
            res.write('\n')
            res.write('Bienvenido/a a la sucursal'  + ' ' + sucursal.sucursal)
            res.write('\n')
            res.write('Direccion: ' + sucursal.direccion)
            res.write('\n')
            res.write('Telefono: ' + sucursal.telefono)
            res.write('\n')
            sucursal.autos.forEach(function(auto){
            res.write('\n')
            res.write('Marca: ' + auto.marca)
            res.write('\n')
            res.write('Modelo: ' + auto.modelo)
            res.write('\n')
            res.write('Color: ' + auto.color)
            res.write('\n')
            res.write('Anio : ' + auto.anio)
            res.write('\n\n')
            }) 
             res.end()
            }  
          
        })  
           
    },
  } 



module.exports = sucursalesController