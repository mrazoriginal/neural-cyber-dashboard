document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "g") {
    document.body.style.filter =
      document.body.style.filter
        ? ""
        : "hue-rotate(90deg) contrast(1.3) saturate(1.5)";
  }
});
