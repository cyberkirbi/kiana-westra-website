const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (form && formNote) {
  form.addEventListener("submit", () => {
    formNote.textContent = "Sending your message to Kiana...";
  });
}
