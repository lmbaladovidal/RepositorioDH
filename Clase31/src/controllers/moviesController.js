const db = require('../database/models');
const Op = db.Sequelize.Op;
module.exports = {
    list:(req,res)=>{
        db.Movies.findAll()
            .then(resultado=>{res.render('moviesList',{movies:resultado})})
            .catch(error=>{console.log(error)})
    },
    new:(req,res)=>{        
        db.Movies.findAll({order:[['release_date','asc']]})
            .then(resultado=>{res.render('newestMovies',{movies:resultado})})
            .catch(error=>{console.log(error)})
    },
    recomended:(req,res)=>{
                db.Movies.findAll({
                    order:[
                        ['release_date','desc']],
                      limit:5,
                    where:{
                        rating:{[Op.gte]:8}
                    }
                })
            .then(resultado=>{res.render('newestMovies',{movies:resultado})})
            .catch(error=>{console.log(error)})
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id)
            .then(resultado=>{res.render('moviesDetail',{movie:resultado})})
            .catch(error=>{console.log(error)})
    }
}