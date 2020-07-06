let fs = require('fs')

let dbAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const autos = {
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('-----ACÁ ESTAN DISPONIBLES TODOS NUESTROS AUTOS------')
        res.write('\n')
        let autos = []
        dbAutos.forEach(function(elemento){
        cantidad += elemento.autos.length})
    }
}
        res.end()
        

    

  

    
module.exports = autos

