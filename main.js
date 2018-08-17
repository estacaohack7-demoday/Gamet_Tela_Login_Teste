let fundo = document.querySelector('.background')
let area = document.querySelector('main')
let warning = document.querySelector('.warning')
let click_area = document.querySelector('.inv_div')


function warn_appear() {
    area.classList.add('main_opacity')
    fundo.classList.add('background_blur')
    setTimeout(function() {
        warning.classList.add('warning_show_up')
    }, 300)
    
}

click_area.addEventListener('click', warn_appear)