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
    categoryId: {
            type: Sequelize.UUID,
            onDelete: 'CASCADE',
            references: {
                    model: 'Categories',
                    key: 'id'
            }
        },
    contentId: {
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