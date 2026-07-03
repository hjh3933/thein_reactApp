import React from "react";
import { useParams } from "react-router-dom";
import "../styles/planDetail.scss";
import PlanCard from "../components/PlanCard";

const PlanDetail = ({ plans, setPlans }) => {
  const { day } = useParams();
  const dayPlan = plans.filter((plan) => String(plan.day) === day);
  return (
    <div className="detailContainer">
      <h1>Day {day}</h1>
      <div>
        {dayPlan.map((plan) => (
          <PlanCard plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PlanDetail;
