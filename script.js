document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#ececec";
        });
        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "white";
        });
    });
});
