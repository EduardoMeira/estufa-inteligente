import { PasswordField } from "../components/password-field";
import { APP_PATHS } from "../constants";

export default function registry() {
  const passwordField = PasswordField({
    id: "password",
    name: "password",
    label: "Senha"
  });

  const confirmPasswordField = PasswordField({
    id: "confirmPassword",
    name: "confirmPassword",
    label: "Confirme sua senha"
  });

  const html = /*html*/ `
    <nav class="ml-[-0.625rem] mb-6">
      <a href="${APP_PATHS.INDEX}">
        <svg class="text-title" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.5C20 7.21589 19.8903 6.94342 19.6949 6.74252C19.4996 6.54163 19.2347 6.42876 18.9584 6.42876H9.59159H3.55778L8.03028 1.83102C8.12712 1.73142 8.20394 1.61318 8.25635 1.48305C8.30876 1.35292 8.33573 1.21344 8.33573 1.07259C8.33573 0.931735 8.30876 0.792258 8.25635 0.662126C8.20394 0.531993 8.12712 0.413753 8.03028 0.314154C7.93344 0.214555 7.81847 0.135548 7.69194 0.081645C7.56542 0.0277424 7.4298 0 7.29285 0C7.1559 0 7.02028 0.0277424 6.89375 0.081645C6.76723 0.135548 6.65226 0.214555 6.55542 0.314154L0.306 6.74156C0.209002 6.84107 0.132045 6.95929 0.0795365 7.08943C0.0270279 7.21958 0 7.3591 0 7.5C0 7.6409 0.0270279 7.78042 0.0795365 7.91057C0.132045 8.04071 0.209002 8.15893 0.306 8.25843L6.55542 14.6858C6.751 14.887 7.01626 15 7.29285 15C7.56944 15 7.8347 14.887 8.03028 14.6858C8.22586 14.4847 8.33573 14.2119 8.33573 13.9274C8.33573 13.6429 8.22586 13.3701 8.03028 13.169L3.55778 8.57124H18.9584C19.2347 8.57124 19.4996 8.45837 19.6949 8.25748C19.8903 8.05658 20 7.78411 20 7.5Z" fill="currentColor"/>
        </svg>
      </a>
    </nav>
    <h1 class="text-title font-semibold text-xl leading-none">
      Criar conta
    </h1>

    <form class="mt-10 flex flex-col h-full">
      <section>
        <div class="flex flex-col">
          <label class="text-label font-normal text-sm uppercase" for="name">
            Nome
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4 text-light">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9.5C11.3261 9.5 12.5979 8.99955 13.5355 8.10876C14.4732 7.21796 15 6.00978 15 4.75C15 3.49022 14.4732 2.28204 13.5355 1.39124C12.5979 0.500445 11.3261 0 10 0C8.67392 0 7.40215 0.500445 6.46447 1.39124C5.52678 2.28204 5 3.49022 5 4.75C5 6.00978 5.52678 7.21796 6.46447 8.10876C7.40215 8.99955 8.67392 9.5 10 9.5ZM20 17.4167C20 19 18.3333 19 18.3333 19H1.66667C1.66667 19 0 19 0 17.4167C0 15.8333 1.66667 11.0833 10 11.0833C18.3333 11.0833 20 15.8333 20 17.4167ZM18.3333 17.4103C18.3317 17.0208 18.0767 15.8492 16.9467 14.7757C15.86 13.7433 13.815 12.6667 10 12.6667C6.185 12.6667 4.14 13.7433 3.05333 14.7757C1.92333 15.8492 1.67 17.0208 1.66667 17.4103H18.3333Z" fill="currentColor"/>
            </svg>
            <input 
              id="name" 
              type="text" 
              name="name" 
              placeholder="Seu primeiro nome" 
              class="placeholder:text-placeholder flex-1 outline-0 text-sm"
            />
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label class="text-label font-normal text-sm uppercase" for="surname">
            Sobrenome
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4 text-light">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9.5C11.3261 9.5 12.5979 8.99955 13.5355 8.10876C14.4732 7.21796 15 6.00978 15 4.75C15 3.49022 14.4732 2.28204 13.5355 1.39124C12.5979 0.500445 11.3261 0 10 0C8.67392 0 7.40215 0.500445 6.46447 1.39124C5.52678 2.28204 5 3.49022 5 4.75C5 6.00978 5.52678 7.21796 6.46447 8.10876C7.40215 8.99955 8.67392 9.5 10 9.5ZM13.3333 4.75C13.3333 5.58985 12.9821 6.39531 12.357 6.98917C11.7319 7.58304 10.8841 7.91667 10 7.91667C9.11594 7.91667 8.2681 7.58304 7.64298 6.98917C7.01786 6.39531 6.66667 5.58985 6.66667 4.75C6.66667 3.91015 7.01786 3.10469 7.64298 2.51083C8.2681 1.91696 9.11594 1.58333 10 1.58333C10.8841 1.58333 11.7319 1.91696 12.357 2.51083C12.9821 3.10469 13.3333 3.91015 13.3333 4.75ZM20 17.4167C20 19 18.3333 19 18.3333 19H1.66667C1.66667 19 0 19 0 17.4167C0 15.8333 1.66667 11.0833 10 11.0833C18.3333 11.0833 20 15.8333 20 17.4167Z" fill="currentColor"/>
            </svg>
            <input 
              id="surname" 
              type="text" 
              name="surname" 
              placeholder="Seu último nome" 
              class="placeholder:text-placeholder flex-1 outline-0 text-sm"
            />
          </div>
        </div>
        <div class="flex flex-col mt-10">
          <label class="text-label font-normal text-sm uppercase" for="email">
            E-mail
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4 text-light">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3C0 2.33696 0.263392 1.70107 0.732233 1.23223C1.20107 0.763392 1.83696 0.5 2.5 0.5H17.5C18.163 0.5 18.7989 0.763392 19.2678 1.23223C19.7366 1.70107 20 2.33696 20 3V13C20 13.663 19.7366 14.2989 19.2678 14.7678C18.7989 15.2366 18.163 15.5 17.5 15.5H2.5C1.83696 15.5 1.20107 15.2366 0.732233 14.7678C0.263392 14.2989 0 13.663 0 13V3ZM2.5 1.75C2.16848 1.75 1.85054 1.8817 1.61612 2.11612C1.3817 2.35054 1.25 2.66848 1.25 3V3.27125L10 8.52125L18.75 3.27125V3C18.75 2.66848 18.6183 2.35054 18.3839 2.11612C18.1495 1.8817 17.8315 1.75 17.5 1.75H2.5ZM18.75 4.72875L12.865 8.26L18.75 11.8812V4.72875ZM18.7075 13.3237L11.6575 8.985L10 9.97875L8.3425 8.985L1.2925 13.3225C1.36353 13.5885 1.5204 13.8236 1.73874 13.9913C1.95708 14.159 2.22468 14.25 2.5 14.25H17.5C17.7752 14.25 18.0426 14.1593 18.261 13.9918C18.4793 13.8243 18.6362 13.5895 18.7075 13.3237ZM1.25 11.8812L7.135 8.26L1.25 4.72875V11.8812Z" fill="currentColor"/>
            </svg>
            <input 
              id="email" 
              type="email" 
              name="email" 
              placeholder="seuemail@email.com" 
              class="placeholder:text-placeholder flex-1 outline-0 text-sm"
            />
          </div>
        </div>
        ${passwordField.html}
        ${confirmPasswordField.html}
      </section>
      <div class="flex items-center justify-center mb-6 mt-6">
        <span class="px-3 text-gray-400 text-sm">OU</span>
      </div>
      <button
        class="flex items-center w-full gap-2 bg-input hover:bg-input/80 transition-colors py-3 px-5 rounded-md mb-6"
      >
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10.9577C21 10.198 20.9319 9.46747 20.8053 8.76611H10.7143V12.9106H16.4805C16.2322 14.2499 15.4774 15.3846 14.3426 16.1444V18.8327H17.8053C19.8312 16.9675 21 14.2207 21 10.9577Z" fill="#4285F4"/>
          <path d="M10.7143 21.4288C13.6072 21.4288 16.0325 20.4693 17.8052 18.833L14.3425 16.1447C13.3832 16.7875 12.1558 17.1674 10.7143 17.1674C7.92369 17.1674 5.56173 15.2826 4.71916 12.7502H1.13962V15.5261C2.90265 19.0278 6.52601 21.4288 10.7143 21.4288Z" fill="#34A853"/>
          <path d="M4.71914 12.7497C4.50485 12.1069 4.38314 11.4202 4.38314 10.714C4.38314 10.0078 4.50485 9.32117 4.71914 8.67831V5.90234H1.1396C0.41403 7.34877 3.05176e-05 8.98517 3.05176e-05 10.714C3.05176e-05 12.4429 0.41403 14.0793 1.1396 15.5257L4.71914 12.7497Z" fill="#FBBC04"/>
          <path d="M10.7143 4.26139C12.2873 4.26139 13.6997 4.80193 14.8101 5.86361L17.8832 2.79054C16.0277 1.06168 13.6023 0 10.7143 0C6.52601 0 2.90265 2.40096 1.13962 5.90261L4.71916 8.67857C5.56173 6.14614 7.92369 4.26139 10.7143 4.26139Z" fill="#E94235"/>
        </svg>
        <span class="mx-auto text-light text-sm font-medium">Fazer login com o Google</span>
      </button>
      <button 
        class="text-center mt-auto bg-primary rounded-lg text-base leading-none font-semibold p-3 w-full text-dark hover:bg-primary/80 transition-colors"
        type="submit"
      >
        Criar conta
      </button>
    </form>
  `;

  function execute() {
    passwordField.execute();
    confirmPasswordField.execute();
  }

  return {
    html,
    execute
  };
}