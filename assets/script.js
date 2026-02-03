// assets/script.js
// Small enhancements: set the current year and allow theme toggling.

// Wrap in an IIFE to avoid leaking variables into the global scope.
(() => {
  // Grab the year element (if it exists) and set it to the current year.
  const yearEl = document.getElementById("year"); // Footer year placeholder element
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear()); // Set year text safely
  }

  // Theme toggle button (if it exists).
  const toggleBtn = document.getElementById("themeToggle"); // Button in the nav
  if (!toggleBtn) {
    return; // Exit if the button isn't on this page
  }

  // Helper: get stored theme if present.
  const storedTheme = localStorage.getItem("theme"); // "dark" or "light" or null

  // Helper: apply a theme to the <html> element and persist it.
  const applyTheme = (theme) => {
    // Apply data-theme to enable CSS variable switch.
    document.documentElement.setAttribute("data-theme", theme); // Set theme attribute
    // Persist theme so it sticks across page loads.
    localStorage.setItem("theme", theme); // Store preference
  };

  // If we have a stored theme, apply it.
  if (storedTheme === "dark" || storedTheme === "light") {
    applyTheme(storedTheme); // Apply stored choice
  }

  // Click handler: toggle between light and dark.
  toggleBtn.addEventListener("click", () => {
    // Read current theme attribute.
    const currentTheme = document.documentElement.getAttribute("data-theme"); // Might be null
    // Decide next theme.
    const nextTheme = currentTheme === "dark" ? "light" : "dark"; // Flip
    // Apply and store.
    applyTheme(nextTheme); // Apply next theme
  });
})();
