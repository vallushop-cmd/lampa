(function () {
    'use strict';

    // Эта функция сработает только при нажатии на "Выход"
    Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
            Lampa.Exit.show = function () {
                Lampa.Select.show({
                    title: 'Выход и Сервис',
                    items: [
                        {title: 'YouTube', action: 'yt'},
                        {title: 'RuTube', action: 'rt'},
                        {title: 'Очистить кэш', action: 'clr'},
                        {title: 'Перезагрузка', action: 'rel'},
                        {title: 'Выйти из Лампы', action: 'exit'}
                    ],
                    onSelect: function (item) {
                        if (item.action == 'yt') window.location.href = 'https://www.youtube.com';
                        if (item.action == 'rt') window.location.href = 'https://rutube.ru';
                        if (item.action == 'clr') { localStorage.clear(); window.location.reload(); }
                        if (item.action == 'rel') window.location.reload();
                        if (item.action == 'exit') {
                             if(window.appready) Lampa.Activity.out();
                             else window.location.reload();
                        }
                    },
                    onBack: function () {
                        Lampa.Select.close();
                    }
                });
            };
        }
    });
})();
