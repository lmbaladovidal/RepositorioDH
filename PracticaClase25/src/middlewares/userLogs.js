const fs = require('fs');
const express = require('express');
const path = require('path');
const logFile = path.join(__dirname,"../logs/logUser.txt");

const logMiddle = {

    logUser: (req,res,next)=>{
        fs.appendFileSync(logFile, "El usuario "+ 000 +" ingreso a la url: "+req.url+"\n");		
		next();
    }
}

module.exports = logMiddle;