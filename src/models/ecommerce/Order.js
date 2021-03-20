const order = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      total_price: {
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

  Order.associate = (models) => {
    Order.belongsTo(models.user);
    Order.hasMany(models.product);
  };

  Order.sync();
  return Order;
};

export default order;
