const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// GraphQL Handler
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

// Setup Server
const server = new ApolloServer({ typeDefs, resolvers });

// Run Server
(async () => {
	try {
		const { url } = await startStandaloneServer(server, { listen: { port: 8000 } });
		console.log();
		console.log(`🚀 Server running at ${url}`);
		console.log();
	} catch (err) {
		console.log();
		console.log(`⚠️ Something went wrong!`);
		console.log(err);
		console.log();
	}
})();
