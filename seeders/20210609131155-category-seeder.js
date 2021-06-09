'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Nodejs'
      },
      {
        name: 'Vuejs'
      },
      {
        name: 'ReactJS'
      },
      {
        name: 'ReactNative'
      },
      {
        name: 'Laravel'
      },
      {
        name: 'Flutter'
      }
    ]);  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', {}, null);
  }
};
