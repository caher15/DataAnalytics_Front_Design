document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const people = document.querySelectorAll('.man-img, .woman-img');
    const charts = document.querySelectorAll('.charts-container');

    charts.forEach(chart => {
        chart.classList.add('visible');
    })
    people.forEach(person => {
        person.classList.add('visible');
    });
    cards.forEach(card => {
        card.classList.add('visible');
    });
});