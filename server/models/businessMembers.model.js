import { v4 as uuidv4 } from 'uuid';

module.exports = (sequelize, DataTypes) => {
  const members = sequelize.define(
    'business_members',
    {
      uuid: {
        type: DataTypes.UUID,
      },

      user_id: {
        type: DataTypes.UUID,
      },
      business_id: {
        type: DataTypes.UUID,
      },
      email: {
        type: DataTypes.STRING,
      },
      role: {
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

  return members;
};
