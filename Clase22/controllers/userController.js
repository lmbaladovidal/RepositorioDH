let users=[ {id:1, nombre:"David"},
            {id:2, nombre:"Leandro"},
            {id:3, nombre:"Alba"},
            {id:4, nombre:"Araceli"},
            {id:5, nombre:"Martin"},
            {id:6, nombre:"Jasmin"},
            {id:7, nombre:"Campo de Verificacion =)"}]

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
    },
    create:(req,res)=>{res.send(req.body)},
    edit:(req,res)=>{
        let id = req.params.idUser;
        let userToEdit = users.filter((usuario)=>{return usuario.id == id})[0]
        console.log(userToEdit)
        res.render("./users/userEdit",{userToEdit:userToEdit});
    },
    put:(req,res)=>{
        res.send("Fui por PUT!!")
    },
    delete:(req,res)=>{
        res.send("borre el usuario "+req.params.idUser+". Na mentira, no se hacerlo. ")
    }

}

module.exports = userController;