exports.seed = function(knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { location: 'east market', name: 'honey', description: 'sweet', price: '10' },
        { location: 'west market', name: 'apple', description: 'fresh', price: '8' },
        { location: 'north market', name: 'blueberry', description: 'nice', price: '5' }
      ])
    })
}