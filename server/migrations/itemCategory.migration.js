module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
            Add altering commands here.
            Return a promise to correctly handle asynchronicity.
  
            Example:
            */
    return queryInterface.createTable(
      'item_categories',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        item_id: {
          type: Sequelize.UUID,
        },
        category_id: {
          type: Sequelize.UUID,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        deleted_at: {
          type: Sequelize.DATE,
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
    return queryInterface.dropTable('item_categories');
  },
};
