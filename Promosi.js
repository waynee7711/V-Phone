document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".promo-card");

  cards.forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
});
