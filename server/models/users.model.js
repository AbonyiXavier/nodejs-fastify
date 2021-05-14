import { v4 as uuidv4 } from 'uuid';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'users',
    {
      uuid: {
        type: DataTypes.UUID,
      },
      default_business_uuid: {
        type: DataTypes.UUID,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
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
    }
  );

  return user;
};
