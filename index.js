// Get the current date
const currentDate = new Date();

// Function to format a date as "Month Day, Year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Update the event details with formatted dates
document.addEventListener('DOMContentLoaded', function () {
    const eventElements = document.querySelectorAll('#events li');

    eventElements.forEach(function (eventElement) {
        const eventDateElement = eventElement.querySelector('p:first-child');
        const eventDate = new Date(eventDateElement.textContent);
        eventDateElement.textContent = `Date: ${formatDate(eventDate)}`;

        const today = new Date();
        if (eventDate < today) {
            eventElement.classList.add('past-event');
        }
    });
});
