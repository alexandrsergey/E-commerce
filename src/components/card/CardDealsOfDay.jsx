import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStopwatch } from "bootstrap-icons/icons/stopwatch.svg";
import Countdown from "react-countdown";

const Completionist = () => <span>Deals End!</span>

const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    return <Completionist />
  }
  else {
    return (
      <span className="text-muted small">
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  }
}

const CardDealsOfDay = (props) => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title pb-3 border-bottom">
            {props.title} <IconStopwatch className="text-primary" />{" "}
            <Countdown
              date={props.endDate}
              renderer={renderer}
            />
            <span className="float-right">
              <Link to={props.to} className="btn btn-sm btn-outline-primary">
                View All
              </Link>
            </span>
          </h5>
          {props.children}
        </div>
      </div>
    );
}

export default CardDealsOfDay;