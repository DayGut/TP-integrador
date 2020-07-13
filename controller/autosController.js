let fs = require('fs')

let dbAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const autos = {
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('-----ACÁ ESTAN DISPONIBLES TODOS NUESTROS AUTOS------')
        res.write('\n')
    
        dbAutos.forEach(function(element){
        element.autos.forEach((element)=>{
           res.write('marca : ' + element.marca + '\n')
           res.write('año : ' + element.anio + '\n')
           res.write('modelo : ' + element.modelo + '\n')
           res.write('color : ' + element.color + '\n')
           res.write('\n-----------------------\n')
        })     
        })
       res.end();
    },

    dato:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idDato = req.params.dato
        let idMarca = req.params.marca
        dbAutos.forEach((element)=>{
            element.autos.forEach((element)=>{
                if(element.marca==idMarca){
                    if(element.color==idDato||element.anio==idDato){
                        res.write('marca : ' + element.marca + '\n')
                        res.write('modelo : ' + element.modelo + '\n')
                        res.write('año : ' + element.anio + '\n')
                        res.write('color : ' + element.color + '\n')
                        res.write('-----------------\n')
                    }
                }
            })
            
        })
        res.end()
    },
    
    id:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})  
        let idMarcas = req.params.marca 
        dbAutos.forEach(function(element){
            element.autos.forEach(function(auto){
                if(auto.marca == idMarcas){
                  
                  res.write('marcas : '+ auto.marca)
                  res.write('\n')
                  res.write('modelo : ' + auto.modelo)
                  res.write('\n')
                  res.write('año :' + auto.anio)
                  res.write('-----------------------\n')
                }
            })
        }) 
        res.end()
       },
   
    
}
       
    
module.exports = autos

