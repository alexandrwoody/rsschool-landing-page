const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const moon = document.querySelector('.moon');
const fullmoon = document.querySelector('.fullmoon');
if (localStorage.getItem('theme') === 'dark') {
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
}
else {
    document.body.classList.add('light')
    document.body.classList.remove('light');
    
    dark.querySelectorAll('path').forEach(p => {
        p.style.fill = '#b0907a;'

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
}
dark.addEventListener('click', () => {
    localStorage.setItem(
        'theme',
        'dark' 
    );
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
    localStorage.setItem(
        'theme',
        'light'
    );
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

