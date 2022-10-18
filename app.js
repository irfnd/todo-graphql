require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// GraphQL Handler
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

// Setup Server
const server = new ApolloServer({ typeDefs, resolvers, introspection: true });
const port = process.env.PORT || 8000;

// Run Server
(async () => {
	try {
		const { url } = await startStandaloneServer(server, { listen: { port } });
		console.log(`\n🚀 Server running at ${url}\n`);
	} catch (err) {
		console.log(`\n⚠️ Something went wrong!`);
		console.log(err, "\n");
	}
})();
