module.exports = function (sequelize, DataTypes) {
  const categories = sequelize.define(
    "categories",
    {
      category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "categories",
      classMethod: {},
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return categories;
};
