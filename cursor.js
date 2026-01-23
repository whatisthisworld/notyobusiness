<script>
(() => {
  /* ===== Inject Cursor CSS ===== */
  const style = document.createElement("style");
  style.textContent = `
    body {
      cursor: url('https://whatsupitdirector.vercel.app/normal.cur'), auto;
    }

    .custom-button {
      cursor: url('https://whatsupitdirector.vercel.app/whatisthat.cur'), pointer;
    }

    .cursor-clicking {
      cursor: url('https://whatsupitdirector.vercel.app/click.cur') 10 25, auto !important;
    }
  `;
  document.head.appendChild(style);

  /* ===== Cursor Click Handling ===== */
  document.addEventListener("mousedown", (e) => {
    const btn = e.target.closest(".custom-button");
    if (btn) btn.classList.add("cursor-clicking");
  });

  window.addEventListener("mouseup", () => {
    document
      .querySelectorAll(".cursor-clicking")
      .forEach(el => el.classList.remove("cursor-clicking"));
  });

  document.addEventListener("mouseleave", () => {
    document
      .querySelectorAll(".cursor-clicking")
      .forEach(el => el.classList.remove("cursor-clicking"));
  });
})();
</script>
