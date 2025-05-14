// Toggle Dark Mode dengan localStorage
const toggleDark = document.getElementById("toggleDarkMode");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

toggleDark?.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// Alert hanya saat halaman kontak dibuka
if (window.location.pathname.includes("contact.html")) {
  window.addEventListener("load", () => {
    alert("🎁 Spesial untuk Anda! Diskon 25% jika mendaftar minggu ini!");
  });
}
