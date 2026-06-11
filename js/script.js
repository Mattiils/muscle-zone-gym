/* ============================================================
   Muscle Zone Gym - Main JavaScript
   Author: Matti
   Description: Handles contact form submission, modal popup
                controls, and dynamic opening hours highlight
   ============================================================ */

/* ===== CONTACT FORM SUBMISSION ===== */
function submitForm() {
  var name    = document.getElementById("name").value.trim();
  var email   = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  /* Basic validation - all required fields must be filled */
  if (!name || !email || !message) {
    alert("Please fill in your name, email, and message before submitting.");
    return;
  }

  /* Show success message and reset the form */
  document.getElementById("form-success").style.display = "block";
  document.getElementById("name").value    = "";
  document.getElementById("email").value   = "";
  document.getElementById("phone").value   = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";

  /* Hide success message after 5 seconds */
  setTimeout(function () {
    document.getElementById("form-success").style.display = "none";
  }, 5000);
}

/* ===== MODAL POPUP CONTROLS ===== */
/* Opens a modal by its ID - user must click a button to trigger */
function openModal(id) {
  var overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add("active");
    /* Move focus inside modal for accessibility */
    var closeBtn = overlay.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }
}

/* Closes a modal by its ID */
function closeModal(id) {
  var overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.remove("active");
  }
}

/* Close modal when clicking outside the modal box */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});

/* Close modal with Escape key - accessibility */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    var openModals = document.querySelectorAll(".modal-overlay.active");
    openModals.forEach(function (m) {
      m.classList.remove("active");
    });
  }
});

/* ===== HIGHLIGHT TODAY IN OPENING HOURS ===== */
/* Runs on contact page - marks the current day */
document.addEventListener("DOMContentLoaded", function () {
  var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var today = days[new Date().getDay()];
  var items = document.querySelectorAll(".hours-item");
  items.forEach(function (item) {
    var dayEl = item.querySelector(".day");
    if (dayEl && dayEl.getAttribute("data-day") === today) {
      item.classList.add("today");
    }
  });
});
