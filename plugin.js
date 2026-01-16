(function () {
    'use strict';

    function MyCustomPlugin() {
        this.init = function () {
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') {
                    addCustomItems();
                }
            });
        };

        function addCustomItems() {
            // 1. Кнопка YouTube
            Lampa.Menu.add({
                title: 'YouTube',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="white"/></svg>',
                component: 'custom_youtube'
            });

            // 2. Кнопка RuTube
            Lampa.Menu.add({
                title: 'RuTube',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#f05022"/></svg>',
                component: 'custom_rutube'
            });

            // 3. Пункт «Сервис»
            Lampa.Menu.add({
                title: 'Сервис',
                icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" stroke-width="2" fill="none"/></svg>',
                component: 'custom_service'
            });

            Lampa.Component.add('custom_youtube', { render: function() { window.location.href = 'https://www.youtube.com'; return $('<div></div>'); }});
            Lampa.Component.add('custom_rutube', { render: function() { window.location.href = 'https://rutube.ru'; return $('<div></div>'); }});
            
            Lampa.Component.add('custom_service', {
                render: function() {
                    Lampa.Select.show({
                        title: 'Сервис',
                        items: [
                            {title: 'Перезагрузить', action: 'reload'},
                            {title: 'Очистить кэш (Reset)', action: 'reset'}
                        ],
                        onSelect: function(item) {
                            if (item.action == 'reload') window.location.reload();
                            if (item.action == 'reset') { localStorage.clear(); window.location.reload(); }
                        },
                        onBack: function() { Lampa.Select.close(); Lampa.Controller.toggle('menu'); }
                    });
                    return $('<div></div>');
                }
            });
        }
    }

    if (window.appready) new MyCustomPlugin().init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') new MyCustomPlugin().init(); });
})();
