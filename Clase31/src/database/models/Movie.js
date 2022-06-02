module.exports = (sequelize,dataTypes)=>{
    let alias= "Movies"
    let columns= {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:dataTypes.STRING
        },
        rating:{
            type:dataTypes.DECIMAL(3,1)
        },
        awards:{
            type:dataTypes.INTEGER
        },
        release_date:{
            type:dataTypes.DATE
        },
        length:{
            type:dataTypes.STRING
        },
        genre_id:{
            type:dataTypes.INTEGER
        }
    }
    let config= {
        timestamps:false
    }
    const Movies = sequelize.define(alias,columns,config);
    Movies.associate = function(models){
        Movies.belongsTo(models.Genres,{
            as:"genres",
            foreignKey:"genre_id"
        })
        Movies.belongsToMany(models.Actors,{
            as: "actors",
            through:"actor_movie",
            foreignKey:"movie_id",
            otherKey:"actor_id",
            timestamps: false
        })
    }
    return Movies;
}