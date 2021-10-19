# African Market Place Backend API

## MVP requirements 
1. A small business `owner` can login and see relevant prices in various categories to help them set their own prices.

2. They can also make listing for `items` they want to sell, which will show up to all `users`.

3. They add a new `item` by selecting their market `location` and typing in their item's `name`, `description`, and `price`.

# backendPotluck Planner API
API Documentation: https://bw-african-market-7.herokuapp.com/

[GET] /api/users - returns an array filled with user objects similar to the following:
```
[
  {
        user_id: 1,
        username: "Alice123",
        password: "123",
        name: "Alice",
        email: "alice@email.com"
    },
    {
        user_id: 2,
        username: "Jim456",
        password: "456",
        name: "Jim",
        email: "jim@email.com"
    }
]
```

#### Authentication:
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [POST]   | /api/auth/register | Requires a username, password, name, and email. Registers a new user.                                  |
| [POST]   | /api/auth/login    | Requires a username and password. Logs the user in.                                                    |

#### Users: 
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [GET]    | /api/users/        | Returns an array filled with user objects.                                                             |
| [GET]    | /api/users/:id     | Returns the user object with the specified `user_id`.                                                       |
| [DELETE] | /api/users/:id     | Removes the user with the specified `user_id` and returns the deleted user.                                 |
| [PUT]    | /api/users/:id     | Updates the user with the specified `user_id` using data from the `request body`. Returns the modified user |

#### Items: 
| Method   | URL                 | Description                                                                                                    |
| ------   | --------------      | ---------------------------------------------------------------------------------------------------------      |
| [POST]   | /api/items/        | Requires `location`, `name` , `description`, and a `price`.  Returns the item object with the specified `item_id`.                                               |
| [GET]    | /api/items/        | Returns an array filled with items objects.                                                                    |
| [GET]    | /api/items/:id     | Returns the item object with the specified `item_id`.                                                        |
| [DELETE] | /api/items/:id     | Removes the item with the specified `item_id` and returns the deleted item.                                 |
| [PUT]    | /api/items/:id     | Updates the item with the specified `item_id` using data from the `request body`. Returns the modified item |
