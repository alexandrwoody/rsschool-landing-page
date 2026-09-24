const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const moon = document.querySelector('.moon');
const fullmoon = document.querySelector('.fullmoon');
dark.addEventListener('click', () => {

    document.body.classList.remove('light');
    document.body.classList.add('dark');
    dark.querySelectorAll('path').forEach(p => {
        p.style.fill = '#b0907a;'

    });

    dark.querySelectorAll('rect').forEach(r => {
        r.style.fill = '#e1d4c9';

    });
    light.querySelectorAll('rect').forEach(p => {
        p.style.fill = '#292826';

    });
    light.querySelectorAll('path').forEach(p => {
        p.style.fill = '#e1d4c9';

    });
});
light.addEventListener('click', () => {

    document.body.classList.remove('dark');
    document.body.classList.add('light');
    dark.querySelectorAll('path').forEach(p => {
        p.style.fill = '#292826';

    });

    dark.querySelectorAll('rect').forEach(r => {
        r.style.fill = '#e1d4c9';

    });
    light.querySelectorAll('rect').forEach(p => {
        p.style.fill = '#b0907a';

    });
    light.querySelectorAll('path').forEach(p => {
        p.style.fill = '#e1d4c9';

    });

});
