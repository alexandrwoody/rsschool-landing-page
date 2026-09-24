const light = document.querySelector('.light');
const dark = document.querySelector('.dark');


dark.addEventListener('click', () => {


    document.body.classList.contains('light');
    document.body.classList.remove('light');
    document.body.classList.add('dark');

});
light.addEventListener('click', () => {


    document.body.classList.contains('dark');
    document.body.classList.remove('dark');
    document.body.classList.add('light');

});
