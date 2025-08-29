import React from "react";

function App() {
  const handlePay = () => {
    // UPI deep link → opens Google Pay app on mobile
    const upiLink =
      "upi://pay?pa=your-upi-id@okicici&pn=YourName&am=50&cu=INR&tn=Test+Payment";
    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pay with Google Pay</h1>
      <button
        onClick={handlePay}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          background: "#4285F4",
          color: "white",
          cursor: "pointer",
        }}
      >
        Open Google Pay
      </button>
    </div>
  );
}

export default App;
