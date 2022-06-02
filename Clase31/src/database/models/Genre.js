module.exports = (sequelize,dataTypes)=>{
    let alias = "Genres";
    let columns = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING
        },
        ranking:{
            type:dataTypes.DECIMAL(3,1)
        },
        active:{
            type:dataTypes.STRING
        }

    }
    let config={
        timestamps:false
    }
    const Genre = sequelize.define(alias,columns,config);
    Genre.associate = function(models){
        Genre.hasMany(models.Movies,{
            as:"movies",
            foreignKey:"genre_id"
        });
    }


    return Genre;
}