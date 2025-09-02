import index from "@/pages/index";
import confirmRegistry from "@/pages/confirm-registry";
import { login } from "@/pages/login";
import registry from "@/pages/registry";
import "./style.css";
import { panel } from "./pages/panel";
import { APP_PATHS, PANEL_MENUS } from "./constants";

const routes = {
  [APP_PATHS.INDEX]: index,
  [APP_PATHS.LOGIN]: login,
  [APP_PATHS.REGISTRY]: registry,
  [APP_PATHS.CONFIRM_REGISTRY]: confirmRegistry,
  [APP_PATHS.PANEL]: panel,
  [APP_PATHS.DASHBOARD]: () => panel(PANEL_MENUS.DASHBOARD),
  [APP_PATHS.CONTROLLERS]: () => panel(PANEL_MENUS.CONTROLLERS),
  [APP_PATHS.CONTROLLER]: () => panel(PANEL_MENUS.CONTROLLERS),
  [APP_PATHS.PROFILE]: () => panel(PANEL_MENUS.PROFILE),
};

const app = document.querySelector("#app");

function currentRoute(path) {
  path = path.replace(/\d+/g, ":id");
  return routes[path];
}

function render(route) {
  if (!route) {
    route = currentRoute("/")();
    history.pushState({}, "", "/");
  }
  app.innerHTML = route.html;

  app.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target.closest("a");
      const path = target.getAttribute("href");
      history.pushState({}, "", path);
      render(currentRoute(path)());
    });
  });
  if (typeof route.execute === "function") route.execute();
}



render(currentRoute(window.location.pathname)());