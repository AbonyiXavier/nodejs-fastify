import { v4 as uuidv4 } from 'uuid';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'items',
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        Validate: {
          notNull: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue('images'));
        },
        set(val) {
          return this.setDataValue('images', JSON.stringify(val));
        },
      },
      business_id: {
        type: DataTypes.UUID,
      },
      qty_exists: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },

      qty_left: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      qty_sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('store', 'my_tag'),
        allowNull: false,
      },
      pricing_type: {
        type: DataTypes.ENUM('single_price', 'multi_price', 'free_entry'),
        allowNull: false,
      },
      sell_type: {
        type: DataTypes.ENUM('subscription', 'one_time'),
        allowNull: false,
      },
      button_color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      button_text: {
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

  Item.beforeCreate((el, _) => {
    return (el.uuid = uuidv4());
  });

  Item.associate = (models) => {
    Item.belongsToMany(models.categories, {
      through: 'item_categories',
      as: 'categories',
      foreignKey: 'item_id',
      otherKey: 'category_id',
      onDelete: 'cascade',
    });
  };
  return Item;
};
