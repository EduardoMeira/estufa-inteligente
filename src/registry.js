const visibilityOn = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 -960 960 960\" width=\"20px\" fill=\"#FFF\"><path d=\"M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z\"/></svg>";
const visibilityOff = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 -960 960 960\" width=\"20px\" fill=\"#FFF\"><path d=\"m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z\"/></svg>";

export default function registryHTML() {
  function togglePasswordVisibility(field, button) {
    field.type = field.type === "password" ? "text" : "password";
    button.innerHTML = field.type === "password" ? visibilityOn : visibilityOff;
  }

  const html = /*html*/ `
    <nav class="ml-[-0.625rem] mb-6">
      <a href="/">
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.5C20 7.21589 19.8903 6.94342 19.6949 6.74252C19.4996 6.54163 19.2347 6.42876 18.9584 6.42876H9.59159H3.55778L8.03028 1.83102C8.12712 1.73142 8.20394 1.61318 8.25635 1.48305C8.30876 1.35292 8.33573 1.21344 8.33573 1.07259C8.33573 0.931735 8.30876 0.792258 8.25635 0.662126C8.20394 0.531993 8.12712 0.413753 8.03028 0.314154C7.93344 0.214555 7.81847 0.135548 7.69194 0.081645C7.56542 0.0277424 7.4298 0 7.29285 0C7.1559 0 7.02028 0.0277424 6.89375 0.081645C6.76723 0.135548 6.65226 0.214555 6.55542 0.314154L0.306 6.74156C0.209002 6.84107 0.132045 6.95929 0.0795365 7.08943C0.0270279 7.21958 0 7.3591 0 7.5C0 7.6409 0.0270279 7.78042 0.0795365 7.91057C0.132045 8.04071 0.209002 8.15893 0.306 8.25843L6.55542 14.6858C6.751 14.887 7.01626 15 7.29285 15C7.56944 15 7.8347 14.887 8.03028 14.6858C8.22586 14.4847 8.33573 14.2119 8.33573 13.9274C8.33573 13.6429 8.22586 13.3701 8.03028 13.169L3.55778 8.57124H18.9584C19.2347 8.57124 19.4996 8.45837 19.6949 8.25748C19.8903 8.05658 20 7.78411 20 7.5Z" fill="white"/>
        </svg>
      </a>
    </nav>
    <h1 class="text-white font-semibold text-xl leading-none">
      Criar conta
    </h1>

    <form class="mt-10 flex flex-col">
      <section>
        <div class="flex flex-col">
          <label class="text-label font-normal text-sm uppercase" for="name">
            Nome
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9.5C11.3261 9.5 12.5979 8.99955 13.5355 8.10876C14.4732 7.21796 15 6.00978 15 4.75C15 3.49022 14.4732 2.28204 13.5355 1.39124C12.5979 0.500445 11.3261 0 10 0C8.67392 0 7.40215 0.500445 6.46447 1.39124C5.52678 2.28204 5 3.49022 5 4.75C5 6.00978 5.52678 7.21796 6.46447 8.10876C7.40215 8.99955 8.67392 9.5 10 9.5ZM20 17.4167C20 19 18.3333 19 18.3333 19H1.66667C1.66667 19 0 19 0 17.4167C0 15.8333 1.66667 11.0833 10 11.0833C18.3333 11.0833 20 15.8333 20 17.4167ZM18.3333 17.4103C18.3317 17.0208 18.0767 15.8492 16.9467 14.7757C15.86 13.7433 13.815 12.6667 10 12.6667C6.185 12.6667 4.14 13.7433 3.05333 14.7757C1.92333 15.8492 1.67 17.0208 1.66667 17.4103H18.3333Z" fill="white"/>
            </svg>
            <input 
              id="name" 
              type="text" 
              name="name" 
              placeholder="Seu primeiro nome" 
              class="placeholder:text-placeholder flex-1 outline-0 text-white text-sm"
            />
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label class="text-label font-normal text-sm uppercase" for="surname">
            Sobrenome
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9.5C11.3261 9.5 12.5979 8.99955 13.5355 8.10876C14.4732 7.21796 15 6.00978 15 4.75C15 3.49022 14.4732 2.28204 13.5355 1.39124C12.5979 0.500445 11.3261 0 10 0C8.67392 0 7.40215 0.500445 6.46447 1.39124C5.52678 2.28204 5 3.49022 5 4.75C5 6.00978 5.52678 7.21796 6.46447 8.10876C7.40215 8.99955 8.67392 9.5 10 9.5ZM13.3333 4.75C13.3333 5.58985 12.9821 6.39531 12.357 6.98917C11.7319 7.58304 10.8841 7.91667 10 7.91667C9.11594 7.91667 8.2681 7.58304 7.64298 6.98917C7.01786 6.39531 6.66667 5.58985 6.66667 4.75C6.66667 3.91015 7.01786 3.10469 7.64298 2.51083C8.2681 1.91696 9.11594 1.58333 10 1.58333C10.8841 1.58333 11.7319 1.91696 12.357 2.51083C12.9821 3.10469 13.3333 3.91015 13.3333 4.75ZM20 17.4167C20 19 18.3333 19 18.3333 19H1.66667C1.66667 19 0 19 0 17.4167C0 15.8333 1.66667 11.0833 10 11.0833C18.3333 11.0833 20 15.8333 20 17.4167Z" fill="white"/>
            </svg>
            <input 
              id="surname" 
              type="text" 
              name="surname" 
              placeholder="Seu último nome" 
              class="placeholder:text-placeholder flex-1 outline-0 text-white text-sm"
            />
          </div>
        </div>
        <div class="flex flex-col mt-10">
          <label class="text-label font-normal text-sm uppercase" for="email">
            E-mail
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3C0 2.33696 0.263392 1.70107 0.732233 1.23223C1.20107 0.763392 1.83696 0.5 2.5 0.5H17.5C18.163 0.5 18.7989 0.763392 19.2678 1.23223C19.7366 1.70107 20 2.33696 20 3V13C20 13.663 19.7366 14.2989 19.2678 14.7678C18.7989 15.2366 18.163 15.5 17.5 15.5H2.5C1.83696 15.5 1.20107 15.2366 0.732233 14.7678C0.263392 14.2989 0 13.663 0 13V3ZM2.5 1.75C2.16848 1.75 1.85054 1.8817 1.61612 2.11612C1.3817 2.35054 1.25 2.66848 1.25 3V3.27125L10 8.52125L18.75 3.27125V3C18.75 2.66848 18.6183 2.35054 18.3839 2.11612C18.1495 1.8817 17.8315 1.75 17.5 1.75H2.5ZM18.75 4.72875L12.865 8.26L18.75 11.8812V4.72875ZM18.7075 13.3237L11.6575 8.985L10 9.97875L8.3425 8.985L1.2925 13.3225C1.36353 13.5885 1.5204 13.8236 1.73874 13.9913C1.95708 14.159 2.22468 14.25 2.5 14.25H17.5C17.7752 14.25 18.0426 14.1593 18.261 13.9918C18.4793 13.8243 18.6362 13.5895 18.7075 13.3237ZM1.25 11.8812L7.135 8.26L1.25 4.72875V11.8812Z" fill="white"/>
            </svg>
            <input 
              id="email" 
              type="email" 
              name="email" 
              placeholder="seuemail@email.com" 
              class="placeholder:text-placeholder flex-1 outline-0 text-white text-sm"
            />
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label class="text-label font-normal text-sm uppercase" for="password">
            Senha
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1.375C7.74261 1.375 8.4548 1.66473 8.9799 2.18046C9.505 2.69618 9.8 3.39565 9.8 4.125V9.625H4.2V4.125C4.2 3.39565 4.495 2.69618 5.0201 2.18046C5.5452 1.66473 6.25739 1.375 7 1.375ZM11.2 9.625V4.125C11.2 3.03098 10.7575 1.98177 9.96985 1.20818C9.1822 0.434597 8.11391 0 7 0C5.88609 0 4.8178 0.434597 4.03015 1.20818C3.2425 1.98177 2.8 3.03098 2.8 4.125V9.625C2.05739 9.625 1.3452 9.91473 0.820101 10.4305C0.294999 10.9462 0 11.6457 0 12.375V19.25C0 19.9793 0.294999 20.6788 0.820101 21.1945C1.3452 21.7103 2.05739 22 2.8 22H11.2C11.9426 22 12.6548 21.7103 13.1799 21.1945C13.705 20.6788 14 19.9793 14 19.25V12.375C14 11.6457 13.705 10.9462 13.1799 10.4305C12.6548 9.91473 11.9426 9.625 11.2 9.625ZM2.8 11H11.2C11.5713 11 11.9274 11.1449 12.1899 11.4027C12.4525 11.6606 12.6 12.0103 12.6 12.375V19.25C12.6 19.6147 12.4525 19.9644 12.1899 20.2223C11.9274 20.4801 11.5713 20.625 11.2 20.625H2.8C2.4287 20.625 2.0726 20.4801 1.81005 20.2223C1.5475 19.9644 1.4 19.6147 1.4 19.25V12.375C1.4 12.0103 1.5475 11.6606 1.81005 11.4027C2.0726 11.1449 2.4287 11 2.8 11Z" fill="white"/>
            </svg>
            <input 
              id="password" 
              type="password" 
              name="password" 
              aria-controls="passwordButton"
              placeholder="Sua senha" 
              class="placeholder:text-placeholder flex-1 outline-0 text-white text-sm"
            />
            <button 
              id="passwordButton"
              type="button" 
              tabindex="-1" 
              aria-label="Exibir senha" 
              class="ml-2 text-white text-lg focus:outline-none leading-0"
            >
              ${visibilityOn}
            </button>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label class="text-label font-normal text-sm uppercase" for="confirmPassword">
            Confirme sua senha
          </label>
          <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1.375C7.74261 1.375 8.4548 1.66473 8.9799 2.18046C9.505 2.69618 9.8 3.39565 9.8 4.125V9.625H4.2V4.125C4.2 3.39565 4.495 2.69618 5.0201 2.18046C5.5452 1.66473 6.25739 1.375 7 1.375ZM11.2 9.625V4.125C11.2 3.03098 10.7575 1.98177 9.96985 1.20818C9.1822 0.434597 8.11391 0 7 0C5.88609 0 4.8178 0.434597 4.03015 1.20818C3.2425 1.98177 2.8 3.03098 2.8 4.125V9.625C2.05739 9.625 1.3452 9.91473 0.820101 10.4305C0.294999 10.9462 0 11.6457 0 12.375V19.25C0 19.9793 0.294999 20.6788 0.820101 21.1945C1.3452 21.7103 2.05739 22 2.8 22H11.2C11.9426 22 12.6548 21.7103 13.1799 21.1945C13.705 20.6788 14 19.9793 14 19.25V12.375C14 11.6457 13.705 10.9462 13.1799 10.4305C12.6548 9.91473 11.9426 9.625 11.2 9.625Z" fill="white"/>
            </svg>
            <input 
              id="confirmPassword" 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirme sua senha" 
              aria-controls="confirmPasswordButton"
              class="placeholder:text-placeholder flex-1 outline-0 text-white text-sm"
            />
            <button 
              id="confirmPasswordButton"
              type="button" 
              tabindex="-1" 
              aria-label="Exibir senha" 
              class="ml-2 text-white text-lg focus:outline-none leading-0"
            >
              ${visibilityOn}
            </button>
          </div>
        </div>
      </section>
      <button 
        class="text-center mt-7 bg-primary rounded-lg text-base leading-none font-semibold p-3 w-full text-dark hover:bg-primary/80 transition-colors"
        type="submit"
      >
        Criar conta
      </button>
    </form>
  `;

  function listenForPasswordVisibilityButton() {
    const passwordInputs = document.querySelectorAll("input[type=\"password\"]");
    passwordInputs.forEach(input => {
      const [button] = input.ariaControlsElements;
      button.addEventListener("click", event => {
        event.preventDefault();
        togglePasswordVisibility(input, button);
      });
    });
  }

  function execute() {
    listenForPasswordVisibilityButton();
  }

  return {
    html,
    execute
  };
}