// Wait for the web page to finish loading
document.addEventListener("DOMContentLoaded", () => {
  // Select all FAQ question elements
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    // Make cards clickable
    card.style.cursor = "pointer";

    // Find the question heading and answer text inside each card
    const question = card.querySelector("h3");
    const answer = card.querySelector("p");

    // Initially hide all answers
    answer.style.display = "none";
    answer.style.marginTop = "8px";

    // Add click event listener
    card.addEventListener("click", () => {
      const isExpanded = answer.style.display === "block";

      // Toggle visibility
      if (isExpanded) {
        answer.style.display = "none";
        card.style.backgroundColor = "#f0f7ff"; // Normal light blue
      } else {
        answer.style.display = "block";
        card.style.backgroundColor = "#e0f0ff"; // Slightly darker blue when active
      }
    });
  });
});