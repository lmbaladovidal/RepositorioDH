const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.json({
                    meta:{
                        status:200,
                        total:genres.length,
                        url:"api/genres"
                    },
                    data:genres,
                    
                })
                res.render('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.json({
                    meta:{
                    status:200,
                    total:genre.length,
                    url:"api/genres"
                    },
                    data:genre,})
                });
    }

}

module.exports = genresController;