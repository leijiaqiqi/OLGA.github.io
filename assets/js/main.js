(function () {
  // Set footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Copy link buttons
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;

    e.preventDefault();
    const text = btn.getAttribute("data-copy") || "";
    if (!text || text.includes("YOUR_")) {
      alert("Replace the placeholder URL first.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = old), 900);
    } catch {
      // Fallback
      prompt("Copy this link:", text);
    }
  });
})();
