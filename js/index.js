document.addEventListener('DOMContentLoaded', () => {
    // Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    // Toggle alert
    const alertBtn = document.getElementById('alertToggleBtn');
    const alertBox = document.getElementById('myAlert');

    alertBtn.addEventListener('click', () => {
        alertBox.classList.toggle('d-none');
    });
});
