import React from "react";
import { Link } from "react-router-dom";
import { categoryImg } from "../tools/function";

const DayColumn = ({ day, plans, deletePlan }) => {
  return (
    <div className="day-column">
      <h2>Day {day}</h2>
      {plans.map((plan) => (
        <div className="one-plan" key={plan.id}>
          <div>{categoryImg(plan.category)}</div>
          <div>{plan.time}</div>
          <div>{plan.title}</div>
          <button onClick={() => deletePlan(plan.id)}>🗑️</button>
        </div>
      ))}
      <Link to={`/plan/${day}`} className="go-plan-detail">
        상세보기🔍
      </Link>
    </div>
  );
};

export default DayColumn;
