module.exports = (sequelize, DataTypes) => {
  const item_category = sequelize.define(
    'item_categories',
    {
      item_id: {
        type: DataTypes.UUID,
      },
      category_id: {
        type: DataTypes.UUID,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: new Date(),
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        defaultValue: null,
      },
    },
    {
      timestamps: false,
    }
  );

  return item_category;
};
