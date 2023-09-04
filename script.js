// Add this to your script.js
document.addEventListener("DOMContentLoaded", () => {
    const profileDropdown = document.querySelector(".profile-dropdown");
    const profileMenu = document.querySelector(".profile-menu");

    profileDropdown.addEventListener("click", () => {
        profileMenu.classList.toggle("show");
    });

    window.addEventListener("click", (event) => {
        if (!profileDropdown.contains(event.target)) {
            profileMenu.classList.remove("show");
        }
    });
});


const bookingForm = document.getElementById('bookingForm');
const bookButton1 = document.getElementById('bookButton1'); // Assuming you have an ID for the button
const printButton = document.getElementById('printButton');
let isBookingFormOpen = false;

bookButton1.addEventListener('click', () => {
    if (!isBookingFormOpen) {
        bookingForm.style.display = 'block';
        isBookingFormOpen = true;
    }
});

const backArrow = document.getElementById('backArrow');

backArrow.addEventListener('click', () => {
    bookingForm.style.display = 'none';
    isBookingFormOpen = false;
});



// Get the "Book Now" button for Type 2
const bookButton2 = document.getElementById('bookButton2');

// Add event listener to the button
bookButton2.addEventListener('click', () => {
    // Open the link when the button is clicked
    window.open("file:///C:/Users/anoop/OneDrive/Desktop/vazhi/vazhi.html");
});


const bookButton3 = document.getElementById('bookButton3');

bookButton3.addEventListener('click', (event) => {
     event.preventDefault();

    const name = document.getElementById('name').value;
    const nakashtram = document.getElementById('nakashtram').value;
    const vazhipaduType = document.getElementById('vazhipaduType').value;
    const offeringCount = document.getElementById('offeringCount').value;
    const date = document.getElementById('date').value;

    if (name && nakashtram && vazhipaduType && offeringCount && date) {
        alert('Booking successful!'); // Display success message

        // Automatically print the booking details
       
        printBookingDetails(name, nakashtram, vazhipaduType, offeringCount, date);
    } else {
        alert(' Please fill all fields!!');
    }
});



// Slideshow variables
let slideIndex = 0;
const slides = document.querySelectorAll('.event-slide');
const dots = document.querySelectorAll('.dot');

// Function to show slides
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change slide every 5 seconds (adjust as needed)
}

// Function to switch to a specific slide
function currentSlide(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    } else {
        slideIndex = n;
    }
    showSlides();
}

// Event listeners for slide navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index + 1);
    });
});

// Initialize the slideshow
showSlides();






function printBookingDetails(name, nakashtram, vazhipaduType, offeringCount, date) {
    const printContent = `
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f3f3f3;
            }
            .receipt {
                width: 800px;
                margin: 20px auto;
                padding: 30px;
                background-color: lightwhite;
                border: 3px solid #ccc;
                box-shadow: 13px 13px 13px 13px rgba(0, 0, 0, 0.1);
                
            }

            .receipt .highlights {
                color: #42b883; 
            }
            h2 {
                font-size: 1.2rem;

                margin-bottom: 10px;
                margin-left: 337px;
            }
            h1 {
                margin-bottom: 1px;
                margin-top: 1px;
                margin-left: 332px;

            }
            .rec {
                margin-top: 6%;
                
            }
            .p1 {
                margin-left: 5%;
                margin-top: -2.8%;
            }
            .p2 {
                margin-left: 40%;
                margin-top: -2%;
            }
            .p3 {
                margin-left: 75%;
                margin-top: -3%;
                margin-bottom: 20%;
            }
            .p4 {
                position: absolute;
                top: 22%;
                left: 8%;
                
            }
            .p5 {
                position: absolute;
                top: 22%;
                left: 40%;
                
                
            }
            .p6 {
                position: absolute;
                top: 22%;
                left: 74%;
                
                
            }
           
            p {
                margin: 5px 0;
            }
            strong {
                font-weight: bold;
            }
            .details {
                margin-top: 10px;
                border-top: 1px solid #ccc;
                padding-top: 10px;
                text-align: center;
            }
            .footer {
                margin-top: 20px;
                text-align: center;
                font-size: 0.8rem;
                color: #777;
            }
        </style>
        <div class="receipt">
        <div class="highlights">
            <h1>Temple Name</h1>
            <u><h2>Booking Receipt</h2></u>
            </div>
            <div class="rec">
            <div class="p1">
            <p><strong>Name: </strong> ${name}</p>
            </div>
            <div class="p2">
            <p><strong>Nakashtram: </strong> ${nakashtram}</p>
            </div>
            <div class="p3">
            <p><strong>Vazhipadu: </strong> ${vazhipaduType}</p>
            </div>
            <div class="p4">
            <p><strong>Offering Count: </strong> ${offeringCount}</p>
            </div>
            <div class="p5">
            <p><strong>Date: </strong> ${date}</p>
            </div>
            <div class="p6">
            <p><strong>Sign: </strong> </p>
            </div>
            </div>
            <div class="details">
                <p>Thank you for booking with us!</p>
            </div>
        </div>
        <div class="footer">
            &copy; 2023 Temple Name. All rights reserved.
        </div>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
        <head>
            <title>Temple Receipt</title>
        </head>
        <body>
            ${printContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}
// Function to handle download icon click for images
function handleImageDownload(icon) {
    const image = icon.parentElement.querySelector('img');
    const imageURL = image.getAttribute('src');
    const anchor = document.createElement('a');
    anchor.href = imageURL;
    anchor.download = 'temple.jpg'; // Set the desired filename for the downloaded image
    anchor.click();
}

// Function to handle download icon click for videos
function handleVideoDownload(icon) {
    const video = icon.parentElement.querySelector('video');
    const videoURL = video.querySelector('source').getAttribute('src');
    const anchor = document.createElement('a');
    anchor.href = videoURL;
    anchor.download = 'C:\Users\anoop\Downloads\vf.mp4'; // Set the desired filename for the downloaded video
    anchor.click();
}






