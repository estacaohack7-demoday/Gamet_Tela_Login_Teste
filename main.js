var fundo = document.querySelector('main')
var warning = document.querySelector('.warning')

setTimeout(function() {
    warning.classList.add('warning_show_up')
    fundo.classList.add('main_blur')
}, 1500)