import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1>
          <Link to="/">Tokyo Planner</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/plan">여행 일정</Link>
            </li>
            <li>
              <Link to="/plan/new">일정 추가</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
