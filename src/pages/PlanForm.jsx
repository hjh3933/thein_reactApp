import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/planForm.scss";

const PlanForm = ({ plans, setPlans, mode }) => {
  const initialForm = {
    day: "1",
    category: "food",
    time: "",
    title: "",
    detail: "",
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const { id } = useParams();
  const isEdit = mode === "edit"; // 이외에는 create

  useEffect(() => {
    if (isEdit) {
      const paramId = Number(id);
      const planData = plans.find((plan) => plan.id === paramId);
      console.log(planData);
      console.log(id);

      if (planData) {
        setForm(planData);
      }
    } else {
      setForm(initialForm);
    }
  }, [isEdit, id, plans]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "day" ? Number(value) : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setPlans(plans.map((p) => (p.id === Number(id) ? { ...p, ...form } : p)));
    } else {
      const newId = Math.max(...plans.map((p) => p.id)) + 1;
      setPlans([...plans, { id: newId, ...form }]);
    }
    // /plan으로 이동
    navigate("/plan");
  };

  return (
    <div className="form-container">
      <h1>{isEdit ? "수정페이지" : "입력페이지"}</h1>
      <form className="plan-form" onSubmit={handleSubmit}>
        <label>
          <span>날짜</span>
          <select name="day" onChange={handleChange} value={form.day}>
            <option value="1">Day1</option>
            <option value="2">Day2</option>
            <option value="3">Day3</option>
          </select>
        </label>
        <label>
          <span>카테고리</span>
          <select name="category" onChange={handleChange} value={form.category}>
            <option value="food">🍽️ 맛집</option>
            <option value="tour">🏛️ 관광</option>
            <option value="activity">🎡 체험</option>
            <option value="shopping">🛍️ 쇼핑</option>
            <option value="cafe">☕ 카페</option>
            <option value="hotel">🏨 숙소</option>
            <option value="transport">🚆 이동</option>
          </select>
        </label>
        <label>
          <span>시간</span>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            value={form.time}
          />
        </label>
        <label>
          <span>제목</span>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
        </label>
        <label>
          <span>설명</span>
          <textarea
            name="detail"
            id="detail"
            onChange={handleChange}
            value={form.detail}
          ></textarea>
        </label>
        <button type="submit">{isEdit ? "수정하기" : "추가하기"}</button>
      </form>
    </div>
  );
};

export default PlanForm;
