const terminal = document.getElementById("terminal");
const cmd = document.getElementById("cmd");

function log(msg) {
  const div = document.createElement("div");
  div.textContent = "> " + msg;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const v = cmd.value.trim();
    log(v);

    if (v === "help") log("commands: help, status, ai, glitch");
    else if (v === "status") log("all systems nominal");
    else if (v === "ai") log("neural core active");
    else if (v === "glitch") log("press G to toggle distortion");

    cmd.value = "";
  }
});
