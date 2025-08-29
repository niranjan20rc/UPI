import React from "react";

function App() {
  const handlePay = () => {
    // Replace with your UPI ID and details
    const upiLink =
      "upi://pay?pa=niranjan@oksbi&pn=Niranjan&am=50&cu=INR";

    // Redirect to Google Pay (or any installed UPI app)
    window.location.href = upiLink;
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Pay using Google Pay</h2>
      <button
        onClick={handlePay}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          background: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Pay ₹50 with GPay
      </button>
    </div>
  );
}

export default App;
