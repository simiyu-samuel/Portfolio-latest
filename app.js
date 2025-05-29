(function () {
  emailjs.init("ilHPjAI2cdI9utfP7");
})();

const skillItems = document.querySelectorAll(".skill-item");
const skillDesc = document.getElementById("skill-description");

skillItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    skillDesc.textContent = item.getAttribute("data-skill");
  });
  item.addEventListener("focus", () => {
    skillDesc.textContent = item.getAttribute("data-skill");
  });
  item.addEventListener("mouseleave", () => {
    skillDesc.textContent = "";
  });
  item.addEventListener("blur", () => {
    skillDesc.textContent = "";
  });
});

const experienceItems = document.querySelectorAll(".experience-item");
const detailBox = document.querySelector(".experience-detail");
const detailText = document.querySelector(".detail-text");

experienceItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // Display the detail box with the corresponding detail
    const detail = item.getAttribute("data-detail");
    detailText.textContent = detail;
    //detailBox.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    // Hide the detail box when not hovering
    //detailBox.style.display = "none";
    detailText.textContent =
      "Gained diverse software development skills across my experience";
  });
});

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
        const subject = "Subject: " + document.getElementById("subject").value;
        let params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: subject + " " + document.getElementById("message").value,
        };
        emailjs.send("service_h3cwkks", "template_y07l3rh", params).then(
          function (response) {
            showAlert("Mesage sent. Success");
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

new Typed("#typing-effect", {
  strings: [
    "🐘 Laravel tamer",
    "React wrangler",
    "WorldSkills Kenya champ 🏆",
    "Lifelong Learner",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#6c757d" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#6c757d",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 4 },
  },
});
particlesJS("particles-js2", {
  particles: {
    number: { value: 50 },
    color: { value: "#6c757d" },
    shape: { type: "triangle" },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c757d",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 4 },
  },
});
particlesJS("particles-js3", {
  particles: {
    number: { value: 100 },
    color: { value: "#6c757d" },
    shape: { type: "triangle" },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c757d",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 4 },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item");
  const skillDescription = document.getElementById("skill-description");

  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const description = item.getAttribute("data-skill");
      skillDescription.textContent = description;
      skillDescription.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
      skillDescription.style.opacity = "0";
    });
  });
});
