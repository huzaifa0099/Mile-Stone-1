document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-skills');
    const skillsList = document.getElementById('skills-list');

    toggleButton.addEventListener('click', function() {
        if (skillsList.classList.contains('hidden')) {
            skillsList.classList.remove('hidden');
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsList.classList.add('hidden');
            toggleButton.textContent = 'Show Skills';
        }
    });
});
