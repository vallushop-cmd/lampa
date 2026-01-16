(function () {
    'use strict';

    function startPlugin() {
        console.log('Плагин: Запуск создания меню');
        
        // Функция добавления пунктов
        function addItems() {
            // Проверяем, не добавили ли мы уже пункты (чтобы не дублировать)
            if ($('.menu__item[data-component="custom_yt"]').length > 0) return;

            // Добавляем YouTube
            Lampa.Menu.add({
                title: 'YouTube',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="white"/></svg>',
                component: 'custom_yt',
                page: true // Помогает отобразить в некоторых версиях
            });

            // Добавляем Сервис
            Lampa.Menu.add({
                title: 'Сервис',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" stroke-width="2" fill="none"/></svg>',
                component: 'custom_srv',
                page: true
            });
        }

        // Регистрируем компоненты
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
                        {title: 'Перезагрузить', action: 'rel'},
                        {title: 'Очистить кэш', action: 'res'}
                    ],
                    onSelect: function(item) {
                        if (item.action == 'rel') window.location.reload();
                        if (item.action == 'res') { localStorage.clear(); window.location.reload(); }
                    },
                    onBack: function() { 
                        Lampa.Select.close(); 
                        Lampa.Controller.toggle('menu'); 
                    }
                });
                return $('<div></div>');
            }
        });

        // Пытаемся добавить пункты сразу
        addItems();
        
        // И еще раз через 2 секунды на случай медленной загрузки меню
        setTimeout(addItems, 2000);
    }

    // Слушаем полную готовность приложения
    if (window.appready) startPlugin();
    else Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') startPlugin();
    });
})();
