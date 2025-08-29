import React from "react";

function App() {
  const openGPay = () => {
    // Intent link for Google Pay
    const gpayIntent =
      "intent://upi/pay#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end";

    window.location.href = gpayIntent;
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Open Google Pay App</h2>
      <button
        onClick={openGPay}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          background: "#34a853",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Open GPay
      </button>
    </div>
  );
}

export default App;
