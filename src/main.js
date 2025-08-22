import indexHTML from ".";
import registryHTML from "./registry";
import "./style.css";

const routes = {
  "/": indexHTML(),
  "/registry": registryHTML()
};

const app = document.querySelector("#app");

function currentRoute(path) {
  return routes[path];
}

function render(route) {
  if (!route) route = currentRoute("/");
  app.innerHTML = route.html;

  app.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target.closest("a");
      const path = target.getAttribute("href");
      history.pushState({}, "", path);
      render(currentRoute(path));
    });
  });
  if (typeof route.execute === "function") route.execute();
}



render(currentRoute(window.location.pathname));