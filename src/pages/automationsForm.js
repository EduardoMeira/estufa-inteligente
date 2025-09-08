import { APP_PATHS } from "../constants";

export function automationsForm({ controllerId, automationId }) {
  const isNew = automationId === "new";

  const html = /*html*/ `
    <div class="flex justify-between gap-2 items-center">
      <div class="flex items-center gap-4">
        <nav class="ml-[-0.625rem]">
          <a href="${APP_PATHS.CONTROLLERS}/${controllerId}" class="text-title">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.5C20 7.21589 19.8903 6.94342 19.6949 6.74252C19.4996 6.54163 19.2347 6.42876 18.9584 6.42876H9.59159H3.55778L8.03028 1.83102C8.12712 1.73142 8.20394 1.61318 8.25635 1.48305C8.30876 1.35292 8.33573 1.21344 8.33573 1.07259C8.33573 0.931735 8.30876 0.792258 8.25635 0.662126C8.20394 0.531993 8.12712 0.413753 8.03028 0.314154C7.93344 0.214555 7.81847 0.135548 7.69194 0.081645C7.56542 0.0277424 7.4298 0 7.29285 0C7.1559 0 7.02028 0.0277424 6.89375 0.081645C6.76723 0.135548 6.65226 0.214555 6.55542 0.314154L0.306 6.74156C0.209002 6.84107 0.132045 6.95929 0.0795365 7.08943C0.0270279 7.21958 0 7.3591 0 7.5C0 7.6409 0.0270279 7.78042 0.0795365 7.91057C0.132045 8.04071 0.209002 8.15893 0.306 8.25843L6.55542 14.6858C6.751 14.887 7.01626 15 7.29285 15C7.56944 15 7.8347 14.887 8.03028 14.6858C8.22586 14.4847 8.33573 14.2119 8.33573 13.9274C8.33573 13.6429 8.22586 13.3701 8.03028 13.169L3.55778 8.57124H18.9584C19.2347 8.57124 19.4996 8.45837 19.6949 8.25748C19.8903 8.05658 20 7.78411 20 7.5Z" fill="currentColor"/>
            </svg>
          </a>
        </nav>
        <h1 class="text-title font-semibold text-xl leading-none">
          Automações
        </h1>
      </div>
      <ul class="flex gap-6 items-center">
        <li>
          <a href="#" class="text-white flex">
            <span class="inline-block origin-top hover:animate-[bell-wiggle_0.7s_ease-in-out] will-change-transform">
              <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 22C10.1962 22 10.8639 21.7103 11.3562 21.1946C11.8484 20.6788 12.125 19.9794 12.125 19.25H6.875C6.875 19.9794 7.15156 20.6788 7.64384 21.1946C8.13613 21.7103 8.80381 22 9.5 22ZM9.5 2.63726L8.45394 2.85864C7.26716 3.11143 6.2003 3.78629 5.43414 4.76886C4.66798 5.75143 4.24964 6.98128 4.25 8.25001C4.25 9.11351 4.07412 11.2709 3.64756 13.3953C3.43756 14.4499 3.15406 15.5485 2.77737 16.5H16.2226C15.8459 15.5485 15.5637 14.4513 15.3524 13.3953C14.9259 11.2709 14.75 9.11351 14.75 8.25001C14.7501 6.98152 14.3316 5.75199 13.5654 4.7697C12.7993 3.78742 11.7326 3.11276 10.5461 2.86001L9.5 2.63726ZM17.6637 16.5C17.9564 17.1146 18.2951 17.6014 18.6875 17.875H0.3125C0.704937 17.6014 1.04356 17.1146 1.33625 16.5C2.5175 14.025 2.9375 9.46001 2.9375 8.25001C2.9375 4.92251 5.195 2.14501 8.19406 1.51114C8.17574 1.31995 8.19588 1.12686 8.25317 0.944326C8.31046 0.761791 8.40363 0.593861 8.52668 0.451368C8.64973 0.308874 8.79992 0.19498 8.96756 0.117032C9.13521 0.0390828 9.31658 -0.00119019 9.5 -0.00119019C9.68342 -0.00119019 9.86479 0.0390828 10.0324 0.117032C10.2001 0.19498 10.3503 0.308874 10.4733 0.451368C10.5964 0.593861 10.6895 0.761791 10.7468 0.944326C10.8041 1.12686 10.8243 1.31995 10.8059 1.51114C12.2897 1.82677 13.6236 2.67015 14.5816 3.89832C15.5396 5.12649 16.0628 6.66392 16.0625 8.25001C16.0625 9.46001 16.4825 14.025 17.6637 16.5Z" fill="currentColor"/>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <form class="mt-9 h-full flex flex-col pb-4">
      <div>
        <label class="block mb-4 text-xl text-light font-semibold">Se</label>
        <div class="relative">
          <select
            class="w-full appearance-none rounded-lg bg-input pl-10 pr-3 py-3 text-sm text-light focus:outline-none"
          >
            <option>Umidade do solo</option>
            <option>Temperatura</option>
            <option>Luminosidade</option>
          </select>
          <span class="material-icons absolute left-5 top-1/2 -translate-y-1/2">
            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.15339 5.71655L5.47067 0.227133C5.41724 0.156897 5.34665 0.0996362 5.26477 0.0601256C5.1829 0.020615 5.09212 0 5 0C4.90788 0 4.8171 0.020615 4.73523 0.0601256C4.65336 0.0996362 4.58276 0.156897 4.52933 0.227133L0.830055 5.74318C0.316216 6.51893 0.029914 7.40774 0 8.32006C0 9.56125 0.526784 10.7516 1.46447 11.6293C2.40215 12.5069 3.67392 13 5 13C6.32608 13 7.59785 12.5069 8.53553 11.6293C9.47322 10.7516 10 9.56125 10 8.32006C9.96806 7.39752 9.67597 6.49931 9.15339 5.71655Z" fill="#50C5FF"/>
            </svg>
          </span>
        </div>
      </div>
      <div class="mt-4">
        <label class="block mb-4 text-xl text-light font-semibold">For</label>
        <select
          class="w-full rounded-lg bg-input px-5 py-3 text-sm text-light"
        >
          <option>Maior</option>
          <option>Menor</option>
          <option>Igual</option>
        </select>
      </div>
      <div class="mt-4">
        <label class="block mb-4 text-xl text-light font-semibold">Que</label>
        <div class="flex gap-2">
          <input
            type="number"
            class="flex-1 rounded-lg bg-input px-5 py-3 text-sm text-light"
            placeholder="30"
          />
        </div>
      </div>
      <div class="mt-4">
        <label class="block mb-4 text-xl text-light font-semibold">Faça</label>
        <select
          class="w-full rounded-lg bg-input px-5 py-3 text-sm text-light"
        >
          <option>Ligar</option>
          <option>Desligar</option>
        </select>
      </div>
      <div class="mt-4">
        <label class="block mb-4 text-xl text-light font-semibold">O que</label>
        <div class="relative">
          <select
            class="w-full appearance-none rounded-lg bg-input pl-8 pr-3 py-3 text-sm text-light"
          >
            <option>Irrigação</option>
            <option>Ventilador</option>
          </select>
        </div>
      </div>
      <div class="mt-4">
        <label class="block mb-4 text-xl text-light font-semibold">Nome</label>
        <div class="flex gap-2">
          <input
            type="text"
            class="flex-1 rounded-lg bg-input px-5 py-3 text-sm text-light"
            placeholder="Ligar irrigação - umidade do solo"
          />
        </div>
      </div>
      <div class="pt-4 mt-auto flex flex-col gap-3">
        ${!isNew ? `
          <button
            type="button"
            class="w-full rounded-lg bg-delete py-3 text-dark font-semibold hover:bg-delete/85 transition-colors"
          >
            Excluir automação
          </button>`: ""}
        <button
          disabled
          type="button"
          class="w-full rounded-lg bg-primary py-3 text-dark font-semibold hover:bg-primary/85 transition-colors disabled:bg-input disabled:text-label"
        >
          Salvar automação
        </button>
      </div>
    </form>
  `;

  return {
    html
  };
}