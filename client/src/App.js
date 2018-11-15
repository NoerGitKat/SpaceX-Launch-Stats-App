import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import spaceXLogo from "./spaceX.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

// Import components
import Launches from "./components/Launches";
import Launch from "./components/Launch";

// Create Apollo instance
const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <header>
              <Link to="/">
                <img className="logo" src={spaceXLogo} alt="SpaceX Logo" />
              </Link>
            </header>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
