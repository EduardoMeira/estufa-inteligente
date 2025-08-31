import { APP_PATHS } from "../constants";
import logo from "/logo.png";

export default function confirmRegistry() {

  const html = /*html*/ `
    <div class="flex flex-col h-full pb-[3.25rem]">
      <a href="${APP_PATHS.INDEX}" class="mx-auto mt-9 flex items-end gap-3">
        <img src="${logo}" class="logo" alt="Logo Estufa Inteligente" />
        <h1 class="text-xl font-semibold text-primary leading-[114.99999999999999%] max-w-[7.188rem]">
          Estufa Inteligente
        </h1>
      </a>
      <div class="flex flex-col items-center justify-center gap-6 mt-20!">
        <h2 class="text-primary text-xl text-center font-bold">
          Conta criada <br /> com sucesso!
        </h2>
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4096_652)"><path d="M27 50.625C20.7343 50.625 14.7251 48.1359 10.2946 43.7054C5.86406 39.2748 3.375 33.2657 3.375 27C3.375 20.7343 5.86406 14.7251 10.2946 10.2946C14.7251 5.86406 20.7343 3.375 27 3.375C33.2657 3.375 39.2748 5.86406 43.7054 10.2946C48.1359 14.7251 50.625 20.7343 50.625 27C50.625 33.2657 48.1359 39.2748 43.7054 43.7054C39.2748 48.1359 33.2657 50.625 27 50.625ZM27 54C34.1608 54 41.0284 51.1554 46.0919 46.0919C51.1554 41.0284 54 34.1608 54 27C54 19.8392 51.1554 12.9716 46.0919 7.90812C41.0284 2.84464 34.1608 0 27 0C19.8392 0 12.9716 2.84464 7.90812 7.90812C2.84464 12.9716 0 19.8392 0 27C0 34.1608 2.84464 41.0284 7.90812 46.0919C12.9716 51.1554 19.8392 54 27 54Z" fill="#56FF95"/><path d="M37.0237 16.7737L36.9562 16.848L25.2349 31.7823L18.171 24.7151C17.6912 24.268 17.0565 24.0246 16.4007 24.0361C15.745 24.0477 15.1193 24.3134 14.6555 24.7771C14.1918 25.2409 13.9261 25.8666 13.9145 26.5223C13.903 27.1781 14.1464 27.8128 14.5935 28.2926L23.5237 37.2262C23.7643 37.4664 24.0508 37.6556 24.3661 37.7826C24.6814 37.9096 25.019 37.9718 25.3589 37.9655C25.6987 37.9592 26.0339 37.8846 26.3442 37.7459C26.6546 37.6073 26.9339 37.4076 27.1654 37.1587L40.6384 20.3175C41.0971 19.836 41.348 19.1932 41.3366 18.5283C41.3253 17.8633 41.0527 17.2295 40.5778 16.7639C40.1029 16.2983 39.4638 16.0383 38.7988 16.0402C38.1337 16.042 37.4961 16.3055 37.0237 16.7737Z" fill="#56FF95"/></g><defs><clipPath id="clip0_4096_652"><rect width="54" height="54" fill="white"/></clipPath></defs>
        </svg>
      </div>
      <p class="text-label text-xl text-center mt-20! mb-12">
        Para prosseguir, <br> verifique sua conta na<br> sua caixa de email.
      </p>
      <p class="text-label text-xs mt-auto text-center">
        Se não conseguir encontrar o link de confirmação, verifique sua caixa de
        Spam ou Lixo Eletrônico.
      </p>
    </div>
  `;

  return {
    html
  };
}