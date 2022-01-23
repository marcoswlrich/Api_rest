const bcryptjs = require('bcryptjs');

module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Marcos Paulo',
          email: 'marcospaulo@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Marcos Paulo 2',
          email: 'marcospaulo2@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Marcos Paulo 3',
          email: 'marcospaulo3@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};
