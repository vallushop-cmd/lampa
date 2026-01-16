(function () {
    'use strict';

    function start() {
        var add = function() {
            if ($('.menu__item[data-component="custom_yt"]').length > 0) return;

            var menu = $('.menu__list');
            if (menu.length > 0) {
                // Создаем кнопку YouTube
                var yt = $('<div class="menu__item selector" data-component="custom_yt"><div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.197-3L10 9v6z" fill="white"/><path d="M21.564 7.147c-.243-.907-.954-1.618-1.861-1.86-1.641-.44-8.203-.44-8.203-.44s-6.562 0-8.203.44c-.907.242-1.618.953-1.86 1.86-.44 1.64-.44 5.063-.44 5.063s0 3.423.44 5.063c.242.907.953 1.618 1.86 1.86 1.641.44 8.203.44 8.203.44s6.562 0 8.203-.44c.907-.242 1.618-.953 1.861-1.86.44-1.64.44-5.063.44-5.063s0-3.423-.44-5.063z" fill="white"/></svg></div><div class="menu__text">YouTube</div></div>');
                
                // Создаем кнопку Сервис
                var srv = $('<div class="menu__item selector" data-component="custom_srv"><div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="white" stroke-width="2" fill="none"/><path d="M12 7v5l3 3" stroke="white" stroke-width="2" fill="none"/></svg></div><div class="menu__text">Сервис</div></div>');

                // Настраиваем клики
                yt.on('click', function() { window.location.href = 'https://www.youtube.com'; });
                srv.on('click', function() { window.location.reload(); });

                // Добавляем в конец меню
                menu.append(yt).append(srv);
            }
        };

        // Проверяем меню каждые 2 секунды
        setInterval(add, 2000);
    }

    // Запуск приложения
    if (window.appready) start();
    else document.addEventListener('DOMContentLoaded', start);
})();
