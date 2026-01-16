 (function () {
    "use strict";

    // 1. Добавляем перевод
    Lampa.Lang.add({
        yt_menu: {
            ru: "YouTube",
            en: "YouTube"
        }
    });

    // 2. Функция добавления кнопок
    function add() {
        // Проверка на дубликаты
        if ($('.menu__item[data-action="youtube_go"]').length > 0) return;

        var ico = '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.197-3L10 9v6z" fill="#fff"/><path d="M21.564 7.147c-.243-.907-.954-1.618-1.861-1.86-1.641-.44-8.203-.44-8.203-.44s-6.562 0-8.203.44c-.907.242-1.618.953-1.86 1.86-.44 1.64-.44 5.063-.44 5.063s0 3.423.44 5.063c.242.907.953 1.618 1.86 1.86 1.641.44 8.203.44 8.203.44s6.562 0 8.203-.44c.907-.242 1.618-.953 1.861-1.86.44-1.64.44-5.063.44-5.063s0-3.423-.44-5.063z" fill="#fff"/></svg>';
        
        var menu_item = $(
            '<li class="menu__item selector" data-action="youtube_go">' +
                '<div class="menu__ico">' + ico + '</div>' +
                '<div class="menu__text">' + Lampa.Lang.translate("yt_menu") + '</div>' +
            '</li>'
        );

        // Обработка клика
        menu_item.on("hover:enter", function () {
            window.location.href = 'https://www.youtube.com';
        });

        // Вставка во второй список меню (где настройки)
        $(".menu .menu__list").eq(1).append(menu_item);
    }

    // 3. Правильный запуск без ошибок
    if (window.appready) add();
    else {
        Lampa.Listener.follow("app", function (e) {
            if (e.type == "ready") {
                // Небольшая задержка, чтобы jQuery успел проснуться
                setTimeout(add, 100);
            }
        });
    }
})();
