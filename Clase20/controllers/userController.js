let users=["David","Leandro","Alba","Araceli","Campo de Verificacion =)"]

const userController = {
    register: (req,res)=>{
        res.render('./usersregister');
    },
    login: (req,res)=>{
        res.render('./users/login');
    },
    list:(req,res)=>{
        res.render('./users/userList',{users: users});
    }
    
}

module.exports = userController;