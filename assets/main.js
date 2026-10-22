// Assemble email links at runtime so the address isn't plain text in the HTML.
document.querySelectorAll("[data-email]").forEach(function (el) {
  var addr = el.dataset.email.split("").reverse().join("");
  el.href = "mailto:" + addr;
  if (!("keepText" in el.dataset)) el.textContent = addr;
});

document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Fall back to initials if the profile photo is missing.
document.querySelectorAll("img.avatar").forEach(function (img) {
  function fallback() {
    var div = document.createElement("div");
    div.className = "avatar";
    div.setAttribute("aria-hidden", "true");
    div.textContent = "MX";
    img.replaceWith(div);
  }
  if (img.complete && img.naturalWidth === 0) fallback();
  else img.addEventListener("error", fallback);
});
