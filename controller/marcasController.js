const fs = require ("fs");
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));//parseo el JSON

const marcasController = {
    index:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Estos son nuestros autos \n')
        let marcas = []
        db.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if(!marcas.includes(auto.marca)){
                    marcas.push(auto.marca)
                }
            })
        })
    
        res.write("Estas son las marcas con las que contamos")
        res.write("\n")
        marcas.forEach(function(marcas){
          res.write('marca : ' + marcas + '\n')
        })
        res.end();
    },

    
     id:function(req, res){
    res.set({'content-type':'text/plain;charset=utf-8'})  
    let idMarcas = req.params.marca 
    db.forEach(function(element){
        element.autos.forEach(function(auto){
            if(auto.marca == idMarcas){
              
              res.write('marcas : '+ auto.marca)
              res.write('\n')
              res.write('modelo : ' + auto.modelo)
              res.write('\n')
              res.write('año :' + auto.anio)
              res.write('\n-----------------------\n')
            }
        })
    }) 
    res.end()
   },
    
    
}

module.exports = marcasController;