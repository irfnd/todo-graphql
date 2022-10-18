const Data = require("../data/data.todos");

const TodoResolver = {
	Query: {
		todos: () => Data.getTodos(),
		todo: (_, args) => Data.getTodo(args),
	},

	Mutation: {
		createTodo: (_, args) => Data.createTodo(args),
		updateTodo: (_, args) => Data.updateTodo(args),
		deleteTodo: (_, args) => Data.deleteTodo(args),
	},
};

module.exports = TodoResolver;
