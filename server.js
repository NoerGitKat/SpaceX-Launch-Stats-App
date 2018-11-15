// Packages
const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");

// Require GraphQL schema
const schema = require("./schema");

// Initialize instance of Express server
const app = express();

// Allow cross-origin
app.use(cors());

// Load middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000; // For deployment purposes

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
