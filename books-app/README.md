## Description
This is a [Nest](https://github.com/nestjs/nest) App to manage CRUD functionalities for books.

## Requirements
- [Node.js 18.17](https://nodejs.org/) or later.
- MongoDB Compass (Follow the steps below)

## Create a local DB connection
- For Windows: Install MongoDB Compass [instructions](https://www.mongodb.com/try/download/compass)
- Create a new local connection without credentials and URI:
```bash
mongodb://localhost:27017
```
- Now you have a local connection created and you can run the app locally

## Run app locally
- Inside the repository root go to books-app/ folder and Install dependencies
```bash
$ cd .\books-app\
$ npm i
```

- Run the development server:
```bash
npm run start:dev
```

- Open [http://localhost:3001/documentation](http://localhost:3001/documentation) with your browser to see the result. 

- Now you can create, update, delete and list books. Run the available endpoints either from the Swagger documentation or from a client (Postman, [Books-web](https://https://github.com/YulianaMH/books-crud/books-web) app).
