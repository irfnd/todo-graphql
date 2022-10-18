// eslint-disable-next-line prefer-const
let Todos = [
	{ id: "1", task: "Doing homework", description: "Math homework page 25", isDone: false },
	{ id: "2", task: "Visiting Grandma's house", description: "At 7pm", isDone: false },
	{ id: "3", task: "Coding project", description: "GraphQL API project", isDone: false },
];

const getTodos = () => {
	return Todos;
};

const getTodo = (args) => {
	return Todos.filter((el) => el.id === args.id)[0];
};

const createTodo = (args) => {
	Todos.push({ id: String(Todos.length + 1), ...args.input });
	return Todos[Todos.length - 1];
};

const updateTodo = (args) => {
	Todos = Todos.map((el) => (el.id === args.id ? { ...el, ...args.input } : el));
	return getTodo(args.id);
};

const deleteTodo = (args) => {
	Todos = Todos.filter((el) => el.id !== args.id);
	return { id: args.id };
};

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
