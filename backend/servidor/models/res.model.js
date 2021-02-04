module.exports = (sequelize, DataTypes) => {
  const Res = sequelize.define("resena", {
    Estado: {
      type: DataTypes.STRING
    },
    Id_resena: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Contenido: {
      type: DataTypes.STRING
    },
    Usuario_res: {
      type: DataTypes.INTEGER
    }
  }, {
  	timestamps: false
  });

  return Res;
};