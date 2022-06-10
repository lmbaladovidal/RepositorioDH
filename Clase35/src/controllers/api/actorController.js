const db = require('../../database/models');
const sequelize = db.sequelize;

const actorsController ={
    list:(req,res)=>{
        db.Actor.findAll()
        .then(actors=>{
            return res.json({meta:{ 
                status:200,
                total:actors.length,
                link:"/api/actors"
            },
                            data:actors
                        })
        })
    },
    create:(req,res)=>{
        db.Actor.create({
                first_name : req.body.first_name,
                last_name: req.body.last_name,
                rating : req.body.rating,
                favorite_movie_id : req.body.favorite_movie_id                 
            })
        return res.json(req.body)
    },
    destroy: function (req,res) {
        let actorId = req.params.id;
        db.Actor
        .destroy({where: {id: actorId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then((response)=>{
           return res.json(response)})
        .catch(error => res.send(error)) 
    },
    detail:(req,res)=>{
        db.Actor
        .findByPk(req.params.id)
        .then(actor=>{ return res.json({
            meta:{
            status:200,
            total:actor.length,
            url:"api/genres"
            },
            data:actor,})})
    }
}

module.exports =actorsController