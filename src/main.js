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
  [APP_PATHS.AUTOMATION]: () => panel(PANEL_MENUS.CONTROLLERS),
  [APP_PATHS.PROFILE]: () => panel(PANEL_MENUS.PROFILE),
};

const app = document.querySelector("#app");

function currentRoute(path) {
  path = path.replace(/\d+/g, ":id");
  path = path.replace("/new", "/:id");
  return routes[path];
}

function navigate(href) {
  history.pushState({}, "", href);
  render(currentRoute(href)());
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
      navigate(target.getAttribute("href"));
    });
  });
  if (typeof route.execute === "function") route.execute();
}

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});

render(currentRoute(window.location.pathname)());