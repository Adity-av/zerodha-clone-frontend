import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Trading and investment platform"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online stock brokerage platform for trading and investing in stocks,
          futures, options, commodities, currency, ETFs, mutual funds, and
          bonds.
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() =>
            (window.location.href =
              "https://zerodhaclonedashboardd.netlify.app/")
          }
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
