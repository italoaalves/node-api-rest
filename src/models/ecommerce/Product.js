const product = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );

  Product.sync();
  return Product;
};

export default product;
