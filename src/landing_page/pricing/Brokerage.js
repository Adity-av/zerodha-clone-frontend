import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
            <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"1em"}} className="text-muted">
                <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
        </div>
        <div className="col-4 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
