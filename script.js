/* Ganti nilai nomor WhatsApp di bawah dengan nomor bisnis format internasional.
   Contoh Indonesia: 6281234567890 (tanpa +, spasi, atau tanda baca). */
const WHATSAPP_NUMBER = "628XXXXXXXXXX";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Buka menu");
  });
});

function whatsappUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number || number.includes("XXXXXXXXXX"))
    return "https://wa.me/?text=" + encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl(
    "Halo, saya tertarik dengan Uwademm. Boleh info varian, harga, dan cara pemesanannya?",
  );
});

document.querySelectorAll(".product-order").forEach((button) => {
  button.addEventListener("click", () => {
    const scent = button.dataset.scent || "Uwademm";
    window.open(
      whatsappUrl(
        `Halo, saya tertarik dengan Uwademm varian ${scent}. Boleh info harga dan ketersediaannya?`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
