const ai = document.getElementById("ai");

document.body.addEventListener("click", () => {
  const responses = [
    "pattern detected in user behavior",
    "simulation updated successfully",
    "no anomalies found",
    "AI confidence rising",
    "reality model recalculated"
  ];

  ai.textContent =
    responses[Math.floor(Math.random() * responses.length)];
});
