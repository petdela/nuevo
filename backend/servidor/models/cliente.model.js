module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("cliente", {
    Correo_cl: {
      type: DataTypes.STRING
    },
    Id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Foto: {
      type: DataTypes.BLOB
    }
  }, {
  	timestamps: false
  });

  return Cliente;
};