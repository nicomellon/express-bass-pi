# Bass-PI

Bass-PI is a RESTful API built with Express.js

# Routes

## Basses Routes

| Method | Route              | Description                         |
| -----: | :----------------- | :---------------------------------- |
|    GET | /api/basses        | returns a list of all basses        |
|    GET | /api/basses/random | returns a random bass guitar        |
|    GET | /api/basses/:id    | returns the bass with a specific ID |
|   POST | /api/basses        | creates a new bass                  |
|    PUT | /api/basses/:id    | updates a bass with a specific ID   |
| DELETE | /api/basses/:id    | deletes a bass with a specific ID   |

## Manufacturers Routes

| Method | Route                         | Description                                         |
| -----: | :---------------------------- | :-------------------------------------------------- |
|    GET | /api/manufacturers            | returns a list of all manufacturers                 |
|    GET | /api/manufacturers/:id/basses | returns a list of all basses from this manufacturer |
|    GET | /api/manufacturers/:id        | returns the manufacturer with a specific ID         |
|   POST | /api/manufacturers            | creates a new manufacturer                          |
|    PUT | /api/manufacturers/:id        | updates the manufacturer with a specific ID         |
| DELETE | /api/manufacturers/:id        | deletes the manufacturer with a specific ID         |
