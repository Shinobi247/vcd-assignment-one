const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql;
const carsData = require("../MOCK_DATA.json");

const CarsType = require("./TypeDefs/CarsType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllCars: {
      type: new GraphQLList(CarsType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return carsData;
      }
    }
  }
});
module.exports = new GraphQLSchema({ query: RootQuery });
