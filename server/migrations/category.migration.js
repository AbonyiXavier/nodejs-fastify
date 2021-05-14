module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          */
    return queryInterface.createTable(
      'categories',
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
        visibility: {
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
    return queryInterface.dropTable('categories');
  },
};
