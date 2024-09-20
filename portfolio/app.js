document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs
      .send("service_id", "template_id", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Failed to send message. Please try again later.");
        }
      );
  });

// Typing effect for the home section
const typedText = "Hi, I'm Samuel Simiyu";
let index = 0;

function type() {
  if (index < typedText.length) {
    document.getElementById("typed-text").textContent +=
      typedText.charAt(index);
    index++;
    setTimeout(type, 100); // Adjust typing speed here
  }
}

type();

// Scroll down functionality
document.getElementById("scroll-btn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("load", function () {
  const homeSection = document.getElementById("home");
  //   const sectionPosition = homeSection.getBoundingClientRect().top;
  //   const screenPosition = window.innerHeight;

  //   if (sectionPosition < screenPosition) {
  homeSection.classList.add("visible");
  //   }
});
