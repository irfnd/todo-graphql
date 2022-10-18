const gql = require("graphql-tag");

const TodoSchema = gql`
	type Todo {
		id: ID!
		task: String!
		description: String
		isDone: Boolean
	}

	type DeletedTodo {
		id: ID!
	}

	input CreateTodoInput {
		task: String!
		description: String
		isDone: Boolean = false
	}

	input UpdateTodoInput {
		task: String
		description: String
		isDone: Boolean
	}

	type Query {
		todos: [Todo!]!
		todo(id: ID!): Todo
	}

	type Mutation {
		createTodo(input: CreateTodoInput!): Todo!
		updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
		deleteTodo(id: ID!): DeletedTodo!
	}
`;

module.exports = TodoSchema;
