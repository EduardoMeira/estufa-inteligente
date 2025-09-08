import { APP_PATHS } from "../constants";
import logo from "/logo.png";

export default function index() {

  const html =  /*html*/ `
    <div class="flex flex-col h-full">
      <section class="mt-auto mx-auto flex items-end gap-3">
        <img src="${logo}" class="logo light-logo-filter" alt="Logo Estufa Inteligente" />
        <h1 class="text-xl font-semibold text-primary leading-[114.99999999999999%] max-w-[7.188rem]">
          Estufa Inteligente
        </h1>
      </section>
      <section class="flex flex-col items-center justify-center mt-auto gap-4">
        <a 
          class="text-center text-primary text-base leading-none font-medium hover:text-primary/80 transition-colors"
          href="${APP_PATHS.LOGIN}"
        >
          Fazer login
        </a>
        <a 
          class="text-center bg-primary rounded-lg text-base leading-none font-semibold p-3 w-full text-dark hover:bg-primary/80 transition-colors"
          href="${APP_PATHS.REGISTRY}"
        >
          Registrar-se
        </a>
      </section>
    </div>
  `;

  return {
    html
  };
}