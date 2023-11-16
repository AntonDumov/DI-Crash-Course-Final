const darkModeSwitcher = document.querySelector('#darkModeSwitch')
let currentMode = 'light'

function switchMode() {
    if (currentMode === 'light') {
        document.querySelector('html').classList.add('dark-mode')
        darkModeSwitcher.textContent = 'brightness_3'
        currentMode = 'dark'
    } else if (currentMode === 'dark') {
        document.querySelector('html').classList.remove('dark-mode')
        darkModeSwitcher.textContent = 'brightness_high'
        currentMode = 'light'
    }

}

darkModeSwitcher.addEventListener('click', switchMode)
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        switchMode()
    }
});
