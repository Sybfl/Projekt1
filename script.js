// Toggle FAQ answers
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// Testimonial Navigation (if there are multiple testimonials)
let currentIndex = 0;
const testimonials = [
    "From the initial meeting to the final delivery...",
    "Another satisfied customer...",
    "Great work and professionalism..."
];

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    document.querySelector(".testimonial blockquote p").innerText = testimonials[currentIndex];
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    document.querySelector(".testimonial blockquote p").innerText = testimonials[currentIndex];
});
