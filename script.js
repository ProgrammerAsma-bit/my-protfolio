const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}

// Intersection Observer for scroll animations (Skills Section)
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skills-category-card");
  
  if (skillCards.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Run animation once
        }
      });
    }, observerOptions);

    skillCards.forEach(card => {
      observer.observe(card);
    });
  }
});
