exports.up = async function(knex) {
    await knex.schema
        .createTable('users', (users) => {
            users.increments('user_id')
            users.string('username', 200)
                .notNullable()
                .unique()
            users.string('password', 200)
                .notNullable()
            users.string('name')
                .notNullable()
            users.string('email')
                .notNullable()
        })
        .createTable('items', (items) => {
            items.increments('item_id')
            items.string('location', 200)
                .notNullable()
            items.string('name', 200)
                .notNullable()
            items.string('description')
            items.decimal('price')
                .notNullable()
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('items')
    await knex.schema.dropTableIfExists('users')
};