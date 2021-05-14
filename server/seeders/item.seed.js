module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Items',
      [
        {
          id: 1,
          uuid: '6003fb36-5112-463e-a1f9-c8944e72412f',
          name: 'item name',
          description: 'my item description',
          images: [
            'https://img.freepik.com/free-vector/nigeria-map-flag-national-emblem_2239-230.jpg?size=338&ext=jpg',
          ],
          business_id: '2e11e4a9-441b-4426-9521-39adc64ccfad',
          qty_exists: 4,
          qty_left: 2,
          qty_sold: 2,
          type: 'store',
          pricing_type: 'single_price',
          sell_type: 'one_time',
          button_color: 'red',
          button_text: 'This is the button text value',
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    ),
  down: (queryInterface) => queryInterface.bulkDelete('Items', null, {}),
};
