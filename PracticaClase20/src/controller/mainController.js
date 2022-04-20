const platos = [ {nombre:"Carpaccio fresco",descripcion:"Entrada Carpaccio de salmón con cítricos",precio:65.50,imagen:"/images/Carpaccio-de-salmon.jpg"},
                 {nombre:"Risotto de berenjena",descripcion:"Risotto de berenjena y queso de cabra",precio:47.00,imagen:"/images/Risotto-berenjena-queso-cabra.jpg"},
                 {nombre:"Mousse de arroz",descripcion:"Mousse de arroz con leche y aroma de azahar",precio:27.50,imagen:"/images/Mousse-de-arroz-con-leche.jpg"},
                 {nombre:"Espárragos blancos",descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",precio:37.50,imagen:"/images/esparragos.png"}

]

const controller = {

    index:(req,res)=>{return res.render('index',{platos:platos});},
    //index:(req,res)=>{return res.render('index',{platos:platos});},
    detalle:(req,res)=>{id = req.params.id
        id < platos.length?res.render('detalleMenu',platos[req.params.id]):res.send('Producto Inexistente') }
    }

module.exports = controller;