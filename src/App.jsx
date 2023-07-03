import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";

function App() {
  return (
    <div className="PricingApp">
      <div className="app-container">
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input type="checkbox" className="price-checkbox" />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        <div className="pricing-cards">
          <PricingCard />
        </div>
      </div>
    </div>
  );
}

export default App;
