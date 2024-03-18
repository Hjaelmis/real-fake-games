const container = document.querySelector('.circle_container');

// Add mousemove event listener
window.addEventListener('mousemove', (event) => {
    // Get mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get container position and dimensions
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    // Adjust angle by -90 degrees to make the top of the circle follow the cursor
    const adjustedAngle = angle - 90;

    // Update container rotation
    container.style.transform = `rotate(${adjustedAngle}deg)`;
});