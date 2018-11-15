import React, { Fragment } from "react";
import Moment from "react-moment";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import MoreInfoLaunchItem from "./MoreInfoLaunchItem";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = props => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  return (
    <Fragment>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading...</h2>;
          if (error) console.log("Oh no! An error!", error);
          return <MoreInfoLaunchItem launch={data.launch} />;
        }}
      </Query>
    </Fragment>
  );
};

export default Launch;
