(function () {
    'use strict';
    function init() {
        // ЭТА СТРОКА ПОКАЖЕТ, РАБОТАЕТ ЛИ ПЛАГИН ВООБЩЕ
        Lampa.Noty.show('Плагин Выхода загружен!');

        var startMenu = function () {
            Lampa.Select.show({
                title: 'Меню выхода',
                items: [
                    {title: 'YouTube TV', action: 'yt'},
                    {title: 'RuTube TV', action: 'rt'},
                    {title: 'Перезагрузить', action: 'rel'},
                    {title: 'Выход', action: 'exit'}
                ],
                onSelect: function (item) {
                    if (item.action == 'yt') window.location.href = 'https://www.youtube.com/tv';
                    if (item.action == 'rt') window.location.href = 'https://rutube.ru/tv-release/';
                    if (item.action == 'rel') window.location.reload();
                    if (item.action == 'exit') {
                        if (Lampa.Platform.is('tizen')) tizen.application.getCurrentApplication().exit();
                        else if (Lampa.Platform.is('webos')) window.close();
                        else if (Lampa.Platform.is('android')) Lampa.Android.exit();
                        else window.location.href = 'about:blank';
                    }
                },
                onBack: function () {
                    Lampa.Select.close();
                    Lampa.Controller.toggle('content');
                }
            });
        };

        // Заменяем стандартную функцию
        Lampa.Exit.show = startMenu;
        
        // Дополнительный перехват для некоторых сборок
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'exit') startMenu();
        });
    }

    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') init(); });
})();
