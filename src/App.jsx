import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";

function App() {
  const [selectMontly, setSelectMonthly] = useState(true);

  console.log(selectMontly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                type="checkbox"
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMontly ? "20.99" : "188.9"}
            storage="50 GB Storage"
            users="5"
            sendUp="5"
          />
          <PricingCard
            title="Deluxy"
            price={selectMontly ? "34.99" : "349.9"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          />
          <PricingCard
            title="Premium"
            price={selectMontly ? "56.99" : "459.9"}
            storage="100 GB Storage"
            users="15"
            sendUp="15"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
