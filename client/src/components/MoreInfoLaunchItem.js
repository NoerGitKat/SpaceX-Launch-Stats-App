import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const MoreInfoLaunchItem = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket
  } = launch;
  const { rocket_id, rocket_name, rocket_type } = rocket;
  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission</span> {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight number: {flight_number}</li>
        <li className="list-group-item">Launch Year: {launch_year}</li>
        <li className="list-group-item">
          Launch Successful:{" "}
          <span className={launch_success ? "text-success" : "text-danger"}>
            {launch_success ? "Yes" : "No"}
          </span>
        </li>
        <li className="list-group-item">
          Launch Date:{" "}
          <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
        </li>
      </ul>
      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <Link to="/" className="btn btn-secondary mt-3">
        Back to overview
      </Link>
    </div>
  );
};

export default MoreInfoLaunchItem;
