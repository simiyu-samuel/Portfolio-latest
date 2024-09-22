(function () {
  emailjs.init("ilHPjAI2cdI9utfP7"); // Replace with your EmailJS user ID
})();

function sendMail() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Simple form validation
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      let isValid = true;

      if (!name.value) {
        name.classList.add("is-invalid");
        isValid = false;
      } else {
        name.classList.remove("is-invalid");
      }

      if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
      } else {
        email.classList.remove("is-invalid");
      }

      if (!message.value) {
        message.classList.add("is-invalid");
        isValid = false;
      } else {
        message.classList.remove("is-invalid");
      }

      // If the form is valid, show the thank-you message
      if (isValid) {
        let params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };
        emailjs.send("service_h3cwkks", "template_y07l3rh", params).then(
          function (response) {
            showAlert(
              "Thank you for reaching out! I'll get back to you soon.",
              "success"
            );
            document.getElementById("contact-form").reset();
          },
          function (error) {
            console.error("Error sending email:", error);
            showAlert(
              "Error sending message. Please try again later.",
              "danger"
            );
          }
        );
        name.value = "";
        email.value = "";
        message.value = "";
      }
    });
}
function showAlert(message, type) {
  const alertMessage = document.getElementById("alert-message");
  const alertText = document.getElementById("alert-text");

  alertText.innerText = message;
  alertMessage.className = `alert alert-${type} alert-dismissible fade show`;
  alertMessage.style.display = "block";

  // Optionally auto-hide the alert after a few seconds
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 5000);
}
// Typing effect for the home section
// const typedText = "Hi, I'm Samuel Simiyu";
// let index = 0;

// function type() {
//   if (index < typedText.length) {
//     document.getElementById("typed-text").textContent +=
//       typedText.charAt(index);
//     index++;
//     setTimeout(type, 100); // Adjust typing speed here
//   }
// }

// type();

window.addEventListener("scroll", function () {
  const aboutImage = document.querySelector("#about img");
  const screenHeight = window.innerHeight;
  const imagePosition = aboutImage.getBoundingClientRect().top;

  if (imagePosition < screenHeight - 100) {
    aboutImage.classList.add("visible");
  }
});

const typedTextA = "Full-Stack Software Developer";
let indexA = 0;

// function typeA() {
//   if (indexA < typedTextA.length) {
//     document.getElementById("typed-text-a").textContent +=
//       typedTextA.charAt(indexA);
//     indexA++;
//     setTimeout(typeA, 160);
//   }
// }

// typeA();

// Scroll down functionality
document.getElementById("scroll-btn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
// Scroll animation function
window.addEventListener("scroll", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const screenHeight = window.innerHeight;

  projectCards.forEach(function (card) {
    const cardPosition = card.getBoundingClientRect().top;

    if (cardPosition < screenHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
