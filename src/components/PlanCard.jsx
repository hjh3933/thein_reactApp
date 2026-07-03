import React from "react";
import { categoryImg } from "../tools/function";
import { Link } from "react-router-dom";

const PlanCard = ({ plan }) => {
  return (
    <div className="plan-card">
      <div className="small-title">
        <div>{categoryImg(plan.category)}</div>
        <div>{plan.time}</div>
        <div>{plan.title}</div>
      </div>
      <div>{plan.detail}</div>
      <Link to={`/plan/${plan.id}/edit`} className="go-plan-update">
        수정하기✏️
      </Link>
    </div>
  );
};

export default PlanCard;
