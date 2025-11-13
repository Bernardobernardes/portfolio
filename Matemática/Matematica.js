// Expande/recolhe descrições
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const desc = btn.nextElementSibling;
    if (desc.style.display === "block") {
      desc.style.display = "none";
      btn.textContent = "Ver mais";
    } else {
      desc.style.display = "block";
      btn.textContent = "Ver menos";
    }
  });
});
