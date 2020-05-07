window.addEventListener('DOMContentLoaded', function() {
    'use strict';

        // clickButton - класс кнопки через точку
        // closeButton - класс кнопки через точку
        // popup - класс модального окна через точку
        // popupAnimation - класс анимации появления, без точки
    let clickButton = '',
        closeButton = '',
        popup = '',
        popupAnimation = '';
        
        

    let more = document.querySelectorAll(clickButton),
        overlay = document.querySelector(popup),
        close = document.querySelector(closeButton);
        
    more.forEach(more => {
        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            more.classList.add(popupAnimation);
            document.body.style.overflow = 'hidden';
            });
        });
        
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove(popupAnimation);
        document.body.style.overflow = '';
    });

});

