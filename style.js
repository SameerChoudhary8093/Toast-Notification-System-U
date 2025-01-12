function showToast(type) {
  const messages = {
    success: "Successfully submitted",
    error: "Please fix the error!",
    invalid: "Invalid input, check again",
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${messages[type]}</span>
  `;

  const toastContainer = document.getElementById("toast-container");
  toastContainer.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
