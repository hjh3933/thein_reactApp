import React from "react";
import DayColumn from "../components/DayColumn";
import { initialPlans } from "../data/db";
import "../styles/plan.scss";

const Plan = ({ plans, setPlans }) => {
  // 삭제
  function deletePlan(id) {
    if (!confirm("일정을 삭제하시겠습니까?")) {
      return;
    }
    // 삭제
    setPlans((plans) => {
      return plans.filter((plan) => plan.id !== id);
    });
  }
  return (
    <div className="day-container">
      {[1, 2, 3].map((day) => (
        <DayColumn
          key={day}
          day={day}
          plans={plans.filter((plan) => Number(plan.day) === day)}
          deletePlan={deletePlan}
        />
      ))}
    </div>
  );
};

export default Plan;
