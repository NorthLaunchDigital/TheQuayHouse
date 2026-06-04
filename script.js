// script.js
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const subject = encodeURIComponent(data.get("subject") || "Enquiry for The Quay House");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${data.get("message") || ""}`
    );

    const mailto = `mailto:info@thequayhouse.co.uk?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });
}
