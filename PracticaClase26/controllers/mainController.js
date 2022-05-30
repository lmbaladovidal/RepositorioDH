const { validationResult } = require("express-validator");

const main = {
    index:(req,res)=>{
        res.send("Esto es un send y session vale: "+req.session.numeroVisitas);
    },
    pruebaSession:(req,res)=>{
        res.render('pruebaSession',{req});
    },
    login:(req,res)=>{
        res.render('login');
    },
    processLogin:(req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty){

        }else{
            return res.render('login',{errors:errors.errors})
        }
    }
}

module.exports = main