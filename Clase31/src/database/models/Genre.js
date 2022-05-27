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
            type:dataTypes.STRING
        },
        active:{
            type:dataTypes.STRING
        }

    }
    let config={
        timeStamps: false
    }
    const Movies = sequelize.define(alias,columns,config);
    return Movies;
}