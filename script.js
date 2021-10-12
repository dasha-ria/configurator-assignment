let state = {
  size: "A4",
  frame: "darkbrown",
  artwork: "landscape",
  boxColor: "purple",
};

const data = new URLSearchParams(window.location.search).get("data");

if (data) {
  state = JSON.parse(atob(data));
}

function render() {
  document.querySelector(
    ".product-img"
  ).src = `img/${state.artwork}-${state.frame}.jpg`;

  document.querySelectorAll(".print-wrap > *").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelector(`.${state.frame}`).classList.add("active");
  document.querySelector(`.${state.artwork}`).classList.add("active");
  document.querySelector(`.${state.size}`).classList.add("active");
  document.querySelector(`.${state.boxColor}`).classList.add("active");
}

function updateURL() {
  history.replaceState(
    {},
    null,
    location.pathname + `?data=${btoa(JSON.stringify(state))}`
  );
  console.log(location.pathname);
}

function updateState(update) {
  state = {
    ...state,
    ...update,
  };
  render();
  updateURL();
}

document.querySelector(".darkbrown").onclick = () => {
  updateState({ frame: "darkbrown" });
};

document.querySelector(".lightbrown").onclick = () => {
  updateState({ frame: "lightbrown" });
};

document.querySelector(".white").onclick = () => {
  updateState({ frame: "white" });
};

document.querySelector(".landscape").onclick = () => {
  updateState({ artwork: "landscape" });
};

document.querySelector(".cat").onclick = () => {
  updateState({ artwork: "cat" });
};

document.querySelector(".catsky").onclick = () => {
  updateState({ artwork: "catsky" });
};

document.querySelector(".A4").onclick = () => {
  updateState({ size: "A4" });
};

document.querySelector(".A3").onclick = () => {
  updateState({ size: "A3" });
};

document.querySelector(".purple").onclick = () => {
  updateState({ boxColor: "purple" });
};

document.querySelector(".blue").onclick = () => {
  updateState({ boxColor: "blue" });
};

document.querySelector(".green").onclick = () => {
  updateState({ boxColor: "green" });
};

render();
// console.log(state);
// updateState({ frame: "lightbrown" });
// console.log(state);
