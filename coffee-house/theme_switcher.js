const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const moon = document.querySelector('.moon');
const fullmoon = document.querySelector('.fullmoon');
dark.addEventListener('click', () => {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');

    }
});
light.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }

});
