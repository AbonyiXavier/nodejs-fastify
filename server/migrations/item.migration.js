module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
            Add altering commands here.
            Return a promise to correctly handle asynchronicity.
  
            Example:
            */
    return queryInterface.createTable(
      'items',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        uuid: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          Valide: {
            notNull: true,
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.TEXT,
          allowNull: false,
          get() {
            return JSON.parse(this.getDataValue('images'));
          },
          set(val) {
            return this.setDataValue('images', JSON.stringify(val));
          },
        },
        business_id: {
          type: Sequelize.UUID,
          allowNull: false,
          Valide: {
            notNull: true,
          },
        },
        qty_exists: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },

        qty_left: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
        },
        qty_sold: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
        },
        type: {
          type: Sequelize.ENUM('store', 'my_tag'),
          allowNull: false,
        },
        pricing_type: {
          type: Sequelize.ENUM('single_price', 'multi_price', 'free_entry'),
          allowNull: false,
        },
        sell_type: {
          type: Sequelize.ENUM('subscription', 'one_time'),
          allowNull: false,
        },
        button_color: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        button_text: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
          defaultValue: new Date(),
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
          defaultValue: new Date(),
        },
        deletedAt: {
          type: Sequelize.DATE,
          field: 'deleted_at',
          defaultValue: null,
        },
      },
      {
        timestamps: true,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
            Add reverting commands here.
            Return a promise to correctly handle asynchronicity.
    
            Example:
            */
    return queryInterface.dropTable('items');
  },
};
