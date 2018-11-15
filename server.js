// Packages
const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const path = require("path");

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

// Use folder 'public' as static folder
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000; // For deployment purposes

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
