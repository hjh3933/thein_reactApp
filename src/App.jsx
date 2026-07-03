import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import PlanDetail from "./pages/PlanDetail";
import PlanForm from "./pages/PlanForm";
import "./styles/reset.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initialPlans } from "./data/db";

function App() {
  const [plans, setPlans] = useState(initialPlans);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/plan"
            element={<Plan plans={plans} setPlans={setPlans} />}
          />
          <Route
            path="/plan/:day"
            element={<PlanDetail plans={plans} setPlans={setPlans} />}
          />
          <Route
            path="/plan/new"
            element={
              <PlanForm plans={plans} setPlans={setPlans} mode="create" />
            }
          />
          <Route
            path="/plan/:id/edit"
            element={<PlanForm plans={plans} setPlans={setPlans} mode="edit" />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
