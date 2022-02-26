const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const CarsType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    year: { type: GraphQLInt },
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    category: { type: GraphQLString },
    picture: { type: GraphQLString },
    objectId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});

module.exports = CarsType;
