module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Play station 4',
          visibility: 'it is visible',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
