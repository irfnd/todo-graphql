# Todo List

A simple todo list backend API using GraphQL and Standalone Apollo Server.

[![Heroku](https://img.shields.io/badge/Running%20on%20Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://irfnd-todo-graphql.herokuapp.com/)
[![Apollo Explorer](https://img.shields.io/badge/Test%20on%20Apollo%20Studio-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)](https://studio.apollographql.com/public/irfnd-todo-graphql/explorer?variant=current)

## Features

- **Environment variables** : using [dotenv](https://github.com/motdotla/dotenv)
- **Server** : using [@apollo/server](https://github.com/apollographql/apollo-server)
- **GraphQL** : using [graphql](https://github.com/graphql/graphql-js) and [graphql-tag](https://github.com/apollographql/graphql-tag)
- **Linting** : using [eslint](https://eslint.org/) and [prettier](https://prettier.io/)

## Get Started

1. Clone this repo
   ```bash
   git clone https://github.com/irfnd/todo-graphql.git
   ```
2. Move to repo folder
   ```bash
   cd todo-graphql
   ```
3. Install all dependencies with
   `yarn` or `npm install`
4. You can specify server port. Create `.env` file by copy-paste `.env.example`. If you not specify the port, server will running on port 8000.
5. Run the server by typing `yarn start` or `npm run start`
6. Server running successfully.
7. To test server endpoint, you can open the server on your browser `http://localhost:8000` and you can explore the endpoint queries.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- Fork the Project
- Create your Feature Branch `git checkout -b feature/AmazingFeature`
- Commit your Changes `git commit -m 'Add some AmazingFeature`
- Push to the Branch `git push origin feature/AmazingFeature`
- Open a Pull Request

## License

Distributed under the [MIT](https://github.com/irfnd/todo-graphql/blob/master/LICENSE) License.
