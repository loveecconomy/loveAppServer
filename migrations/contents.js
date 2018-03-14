'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contents', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
        },
      title: {
        type: Sequelize.STRING
      },
      contentType: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      views: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Contents',
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contents');
  }
};