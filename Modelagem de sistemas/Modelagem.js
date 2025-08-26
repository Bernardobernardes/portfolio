document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const descricao = btn.nextElementSibling;
    if (descricao.style.display === "block") {
      descricao.style.display = "none";
      btn.textContent = "Ver mais";
    } else {
      descricao.style.display = "block";
      btn.textContent = "Ver menos";
    }
  });
});
