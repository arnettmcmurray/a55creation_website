// === Global Lightbox for All Images ===
document.addEventListener("DOMContentLoaded", () => {
  // Grab ALL images inside <main>
  const allImages = document.querySelectorAll("main img");

  allImages.forEach((img) => {
    img.addEventListener("click", () => {
      // create lightbox overlay
      const lightbox = document.createElement("div");
      lightbox.id = "lightbox";

      // clone image
      const clone = img.cloneNode();
      lightbox.appendChild(clone);
      document.body.appendChild(lightbox);

      // close on click
      lightbox.addEventListener("click", () => {
        if (document.body.contains(lightbox)) {
          document.body.removeChild(lightbox);
        }
      });

      // close on ESC key
      document.addEventListener("keydown", function escHandler(e) {
        if (e.key === "Escape") {
          if (document.body.contains(lightbox)) {
            document.body.removeChild(lightbox);
          }
          document.removeEventListener("keydown", escHandler);
        }
      });
    });
  });
});

// === Smooth Scroll for Navbar Links ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Commission Form Confirmation ===
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We’ll be in touch soon!");
    form.reset();
  });
}
