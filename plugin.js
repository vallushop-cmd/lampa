(function () {
    'use strict';

    function addYoutube() {
        // Проверяем, есть ли уже кнопка, чтобы не добавлять повторно
        if ($('.menu__item[data-component="youtube_simple"]').length > 0) return;

        // Находим список левого меню
        var menu = $('.menu__list');
        
        if (menu.length > 0) {
            // Создаем простую кнопку
            var btn = $('<div class="menu__item selector" data-component="youtube_simple">' +
                            '<div class="menu__ico">' +
                                '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.197-3L10 9v6z" fill="white"/><path d="M21.564 7.147c-.243-.907-.954-1.618-1.861-1.86-1.641-.44-8.203-.44-8.203-.44s-6.562 0-8.203.44c-.907.242-1.618.953-1.86 1.86-.44 1.64-.44 5.063-.44 5.063s0 3.423.44 5.063c.242.907.953 1.618 1.86 1.86 1.641.44 8.203.44 8.203.44s6.562 0 8.203-.44c.907-.242 1.618-.953 1.861-1.86.44-1.64.44-5.063.44-5.063s0-3.423-.44-5.063z" fill="white"/></svg>' +
                            '</div>' +
                            '<div class="menu__text">YouTube</div>' +
                        '</div>');

            // При клике — прямой переход по ссылке
            btn.on('click', function() {
                window.location.href = 'https://www.youtube.com';
            });

            // Вставляем кнопку в самый конец меню
            menu.append(btn);
        }
    }

    // Запускаем проверку меню каждые 2 секунды (на случай, если оно перерисовывается)
    setInterval(addYoutube, 2000);

})();
