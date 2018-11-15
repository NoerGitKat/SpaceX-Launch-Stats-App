import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

// GraphQL query to only get this Launches data
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading</h4>;
          if (error) console.log("error", error);

          return (
            <Fragment>
              {data.launches.map((launch, index) => (
                <LaunchItem launch={launch} key={index} />
              ))}
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default Launches;
