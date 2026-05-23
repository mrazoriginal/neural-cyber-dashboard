setTimeout(() => {
  document.getElementById("boot").classList.add("hidden");
  document.getElementById("os").classList.remove("hidden");
}, 1800);

setInterval(() => {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}, 1000);
