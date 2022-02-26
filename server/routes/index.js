"use strict";
const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const schema = require("../Schemas/index");

router.post(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

module.exports = router;
