document.body.classList.add("loading");

const MIN_LOADING_TIME = 1500;

const startTime = Date.now();

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

  setTimeout(() => {
    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
      document.body.classList.remove("loading");
    }, 600);
  }, remaining);
});
