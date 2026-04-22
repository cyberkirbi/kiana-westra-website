const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const recipient = form.dataset.recipient;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!recipient || !name || !email || !message) {
      formNote.textContent = "Please fill out your name, email, and message first.";
      return;
    }

    const subject = encodeURIComponent(`Trial lesson inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    formNote.textContent = "Your email app should open with a draft message to Kiana.";
  });
}
