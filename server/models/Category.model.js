import { v4 as uuidv4 } from 'uuid';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'categories',
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        Valide: {
          notNull: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visibility: {
        type: DataTypes.STRING,
        allowNull: false,
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
      timestamps: true,
      paranoid: true,
    }
  );

  Category.beforeCreate((el, _) => {
    return (el.uuid = uuidv4());
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.items, {
      through: 'item_categories',
      as: 'items',
      foreignKey: 'category_id',
      otherKey: 'item_id',
      onDelete: 'cascade',
    });
  };
  return Category;
};
