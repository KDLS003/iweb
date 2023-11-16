function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.navigation section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var section = document.getElementById(sectionId);
    section.style.display = 'block';
}
var section = document.getElementById(sectionId);
            section.style.display = 'block';

            var buttons = document.querySelectorAll('.about-navbar button');
            buttons.forEach(function(button) {
                button.classList.remove('underline');
            });

            var clickedButton = document.getElementById(sectionId + 'Btn');
            clickedButton.classList.add('underline');

            