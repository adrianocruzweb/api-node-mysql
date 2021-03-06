module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'orders', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'products', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        clientId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'clients', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders')
  }
}
