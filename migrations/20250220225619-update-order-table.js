'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('order', 'fullName', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('order', 'houseAddress', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('order', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('order', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('order', 'status', {
      type: Sequelize.ENUM('cancelled', 'pending', 'success'),
      allowNull: true,
      defaultValue: 'pending',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('order', 'fullName');
    await queryInterface.removeColumn('order', 'houseAddress');
    await queryInterface.removeColumn('order', 'phoneNumber');
    await queryInterface.removeColumn('order', 'email');
    await queryInterface.removeColumn('order', 'status');
  }
};
