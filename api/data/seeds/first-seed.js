exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'Alice123', password: '123', name: 'Alice', email: 'alice@email.com'},
    {username: 'Jim456', password: '456', name: 'Jim', email: 'jim@email.com'},
    {username: 'Bob789', password: '789', name: 'Bob', email: 'bob@email.com'}
      ])
    })
};
