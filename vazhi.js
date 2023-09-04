document.addEventListener("DOMContentLoaded", function () {
    const vazhipaduCards = document.querySelectorAll(".vazhipadu-card");
    const bookingForm = document.getElementById("bookingForm");
    const vazhipaduTypeInput = document.getElementById("vazhipaduType");
    const offeringCountInput = document.getElementById("offeringCount"); // Added this line

    vazhipaduCards.forEach(card => {
        const incrementBtn = card.querySelector(".increment-btn");
        const decrementBtn = card.querySelector(".decrement-btn");
        const offeringCount = card.querySelector(".offering-count");
        const bookNowButton = card.querySelector(".book-now-btn");

        let count = 1;

        incrementBtn.addEventListener("click", () => {
            count++;
            offeringCount.textContent = count;
        });

        decrementBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                offeringCount.textContent = count;
            }
        });

        bookNowButton.addEventListener("click", () => {
            const vazhipaduType = card.querySelector("h3").textContent;
            vazhipaduTypeInput.value = vazhipaduType;
            offeringCountInput.value = count; // Set offering count to input value
            bookingForm.style.display = "block";
            scrollToForm();
        });
    });

    function scrollToForm() {
        const yOffset = -20; // Adjust the offset as needed
        const element = bookingForm;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
});
