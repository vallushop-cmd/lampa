(function () {
    'use strict';

    function startPlugin() {
        var addItems = function() {
            // Если кнопка уже есть, ничего не делаем
            if ($('.menu__item[data-component="custom_yt"]').length > 0) return;

            // Пробуем добавить через официальное API
            Lampa.Menu.add({
                title: 'YouTube',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.197-3L10 9v6z" fill="white"/><path d="M21.564 7.147c-.243-.907-.954-1.618-1.861-1.86-1.641-.44-8.203-.44-8.203-.44s-6.562 0-8.203.44c-.907.242-1.618.953-1.86 1.86-.44 1.64-.44 5.063-.44 5.063s0 3.423.44 5.063c.242.907.953 1.618 1.86 1.86 1.641.44 8.203.44 8.203.44s6.562 0 8.203-.44c.907-.242 1.618-.953 1.861-1.86.44-1.64.44-5.063.44-5.063s0-3.423-.44-5.063z" fill="white"/></svg>',
                component: 'custom_yt'
            });

            Lampa.Menu.add({
                title: 'Сервис',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="white" stroke-width="2" fill="none"/><path d="M12 7v5l3 3" stroke="white" stroke-width="2" fill="none"/></svg>',
                component: 'custom_srv'
            });
        };

        // Логика работы кнопок
        Lampa.Component.add('custom_yt', {
            render: function() {
                window.location.href = 'https://www.youtube.com';
                return $('<div></div>');
            }
        });

        Lampa.Component.add('custom_srv', {
            render: function() {
                Lampa.Select.show({
                    title: 'Сервис',
                    items: [
                        {title: 'Перезагрузить Lampa', action: 'rel'},
                        {title: 'Очистить кэш (Reset)', action: 'res'}
                    ],
                    onSelect: function(item) {
                        if (item.action == 'rel') window.location.reload();
                        if (item.action == 'res') { localStorage.clear(); window.location.reload(); }
                    },
                    onBack: function() { Lampa.Select.close(); Lampa.Controller.toggle('menu'); }
                });
                return $('<div></div>');
            }
        });

        // ЗАПУСК: Проверяем и добавляем меню каждые 500мс в течение 10 секунд
        var attempts = 0;
        var timer = setInterval(function() {
            addItems();
            attempts++;
            if (attempts > 20) clearInterval(timer); 
        }, 500);
    }

    // Ждем старта приложения
    if (window.appready) startPlugin();
    else Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') startPlugin();
    });
})();
