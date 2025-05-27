const tabButtons = document.querySelectorAll(".tabs button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Hide all tab contents
    tabContents.forEach((content) =>
      content.classList.remove("tab-content--active")
    );

    // Add active class to clicked button and show its content
    button.classList.add("active");
    document.getElementById(targetId).classList.add("tab-content--active");
  });
});
