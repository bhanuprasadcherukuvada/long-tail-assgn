const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const data = require("./data.json");

const typeDefs = gql`
	type Query {
		post_info(json_id: Int): PostInfo
	}

	type PostInfo {
		title: String
		description: String
	}
`;

function getTitleAndDescription(json_id) {
	const result = data.filter((item) => item.id === json_id);
	if (!result) {
		return {
			title: "",
			description: "",
		};
	}

	console.log(result);
	return {
		title: result[0].title,
		description: result[0].description,
	};
}

const resolvers = {
	Query: {
		post_info: (parent, args, context) => {
			console.log(args);
			return getTitleAndDescription(args.json_id);
		},
	},
};

const schema = new ApolloServer({ typeDefs, resolvers });

schema.listen({ port: 5000 }).then(({ url }) => {
	console.log(`schema ready at ${url}`);
});
