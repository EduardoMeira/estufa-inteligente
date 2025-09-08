const visibilityOn = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 -960 960 960\" width=\"20px\" fill=\"#FFF\"><path d=\"M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z\"/></svg>";
const visibilityOff = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 -960 960 960\" width=\"20px\" fill=\"#FFF\"><path d=\"m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z\"/></svg>";

export function PasswordField({
  id, name, label, value, placeholder = "Sua senha"
}) {
  function togglePasswordVisibility(field, button) {
    field.type = field.type === "password" ? "text" : "password";
    button.innerHTML = field.type === "password" ? visibilityOn : visibilityOff;
  }

  const html = /*html*/ `
    <div class="flex flex-col mt-4">
      <label class="text-label font-normal text-sm uppercase" for="${id}">
        ${label}
      </label>
      <div class="rounded-md bg-input flex items-center justify-start gap-2 px-3 py-4 text-light">
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1.375C7.74261 1.375 8.4548 1.66473 8.9799 2.18046C9.505 2.69618 9.8 3.39565 9.8 4.125V9.625H4.2V4.125C4.2 3.39565 4.495 2.69618 5.0201 2.18046C5.5452 1.66473 6.25739 1.375 7 1.375ZM11.2 9.625V4.125C11.2 3.03098 10.7575 1.98177 9.96985 1.20818C9.1822 0.434597 8.11391 0 7 0C5.88609 0 4.8178 0.434597 4.03015 1.20818C3.2425 1.98177 2.8 3.03098 2.8 4.125V9.625C2.05739 9.625 1.3452 9.91473 0.820101 10.4305C0.294999 10.9462 0 11.6457 0 12.375V19.25C0 19.9793 0.294999 20.6788 0.820101 21.1945C1.3452 21.7103 2.05739 22 2.8 22H11.2C11.9426 22 12.6548 21.7103 13.1799 21.1945C13.705 20.6788 14 19.9793 14 19.25V12.375C14 11.6457 13.705 10.9462 13.1799 10.4305C12.6548 9.91473 11.9426 9.625 11.2 9.625ZM2.8 11H11.2C11.5713 11 11.9274 11.1449 12.1899 11.4027C12.4525 11.6606 12.6 12.0103 12.6 12.375V19.25C12.6 19.6147 12.4525 19.9644 12.1899 20.2223C11.9274 20.4801 11.5713 20.625 11.2 20.625H2.8C2.4287 20.625 2.0726 20.4801 1.81005 20.2223C1.5475 19.9644 1.4 19.6147 1.4 19.25V12.375C1.4 12.0103 1.5475 11.6606 1.81005 11.4027C2.0726 11.1449 2.4287 11 2.8 11Z" fill="currentColor"/>
        </svg>
        <input 
          id="${id}" 
          type="password" 
          name="${name}" 
          value="${value || ""}"
          aria-controls="passwordButton-${id}"
          placeholder="${placeholder}" 
          class="placeholder:text-placeholder flex-1 outline-0 text-light text-sm"
        />
        <button 
          id="passwordButton-${id}"
          type="button" 
          tabindex="-1" 
          aria-label="Exibir senha" 
          class="ml-2 text-light text-lg focus:outline-none leading-0"
        >
          ${visibilityOn}
        </button>
      </div>
    </div>
  `;

  function listenForPasswordVisibilityButton() {
    const passwordInput = document.getElementById(id);
    const [button] = passwordInput.ariaControlsElements;
    button.addEventListener("click", event => {
      event.preventDefault();
      togglePasswordVisibility(passwordInput, button);
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