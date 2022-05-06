const { validationResult } = require("express-validator");

const controller = {

    index:(req,res)=>{
        res.render('index')
    },
    validator:(req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()){
            console.log("todo OK");
        }else{
            
            res.send(errors)
            res.render('error',{errors:errors.array()});
        }
        
    }

}

module.exports = controller;