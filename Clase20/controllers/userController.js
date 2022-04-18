let users=[ {id:1, nombre:"David"},
            {id:2, nombre:"Leandro"},
            {id:3, nombre:"Alba"},
            {id:4, nombre:"Araceli"},
            {id:4, nombre:"Martin"},
            {id:4, nombre:"Jasmin"},
            {id:5, nombre:"Campo de Verificacion =)"}]

const userController = {
    register: (req,res)=>{
        res.render('./users/register');
    },
    login: (req,res)=>{
        res.render('./users/login');
    },
    list:(req,res)=>{
        res.render('./users/userList',{users: users});
    },
    search:(req,res)=>{
        let search = req.query.search;
        let userResults = users.filter((usuario)=>{return usuario.nombre.includes(search)})
        res.render('./users/userResults',{userResults:userResults})
    }
    
}

module.exports = userController;