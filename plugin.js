(function () {
    'use strict';
    // Функция установки кнопки
    function LampaYoutube() {
        // Удаляем все старые кривые кнопки, если они есть
        $('[data-component="custom_yt"], .my-yt, .youtube_simple').remove();

        var menu = $('.menu__list');
        if (menu.length > 0) {
            var btn = $('<div class="menu__item selector" data-component="custom_yt">' +
                        '<div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.197-3L10 9v6z" fill="white"/><path d="M21.564 7.147c-.243-.907-.954-1.618-1.861-1.86-1.641-.44-8.203-.44-8.203-.44s-6.562 0-8.203.44c-.907.242-1.618.953-1.86 1.86-.44 1.64-.44 5.063-.44 5.063s0 3.423.44 5.063c.242.907.953 1.618 1.86 1.86 1.641.44 8.203.44 8.203.44s6.562 0 8.203-.44c.907-.242 1.618-.953 1.861-1.86.44-1.64.44-5.063.44-5.063s0-3.423-.44-5.063z" fill="white"/></svg></div>' +
                        '<div class="menu__text">YouTube</div>' +
                        '</div>');

            btn.on('click', function () {
                window.location.href = 'https://www.youtube.com';
            });

            menu.append(btn);
            console.log('YouTube button added');
        }
    }

    // Запуск
    var interval = setInterval(function () {
        if ($('.menu__list').length > 0) {
            LampaYoutube();
            clearInterval(interval);
        }
    }, 1000);
})();
