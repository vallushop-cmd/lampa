(function () {
    'use strict';

    function injectExitMenu() {
        // Ищем окно выхода (оно появляется справа)
        var exitMenu = $('.confirm.type--confirm'); 
        
        if (exitMenu.length > 0) {
            // Если кнопка YouTube уже добавлена, ничего не делаем
            if (exitMenu.find('.custom-exit-button').length > 0) return;

            // Создаем кнопку YouTube в стиле меню выхода
            var ytBtn = $('<div class="confirm__button selector custom-exit-button">YouTube</div>');

            // При нажатии переходим на YouTube
            ytBtn.on('click', function() {
                window.location.href = 'https://www.youtube.com';
            });

            // Вставляем кнопку над кнопкой "Да, выйти"
            exitMenu.find('.confirm__content').append(ytBtn);
            
            // Обновляем навигацию пульта, чтобы кнопка стала кликабельной
            if (window.Lampa && Lampa.Controller) {
                Lampa.Controller.toggle('confirm');
            }
        }
    }

    // Постоянно проверяем, не открылось ли меню выхода справа
    setInterval(injectExitMenu, 500);

})();
