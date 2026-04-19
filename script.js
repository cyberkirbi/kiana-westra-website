const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thanks for your message. This demo form is ready to connect to email or a booking tool.";
    form.reset();
  });
}
