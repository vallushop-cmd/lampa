(function () {
    'use strict';

    function init() {
        // Создаем свое меню
        var showExitMenu = function() {
            Lampa.Select.show({
                title: 'Меню Выход',
                items: [
                    {title: 'YouTube', action: 'yt'},
                    {title: 'RuTube', action: 'rt'},
                    {title: 'Очистить кэш', action: 'clr'},
                    {title: 'Перезагрузить', action: 'rel'},
                    {title: 'Выход', action: 'exit'}
                ],
                onSelect: function (item) {
                    if (item.action == 'yt') window.location.href = 'https://www.youtube.com/tv';
                    if (item.action == 'rt') window.location.href = 'https://rutube.ru/tv-release/';
                    if (item.action == 'clr') { localStorage.clear(); window.location.reload(); }
                    if (item.action == 'rel') window.location.reload();
                    if (item.action == 'exit') {
                        if (Lampa.Platform.is('tizen')) window.tizen.application.getCurrentApplication().exit();
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

        // ПЕРЕХВАТ: Главный секрет твоего кода
        // Мы подменяем функцию показа выхода прямо в объекте
        Lampa.Exit.show = function() {
            showExitMenu();
        };

        // На всякий случай дублируем перехват на кнопку в меню
        $(document).on('click', '[data-component="exit"]', function (e) {
            e.preventDefault();
            e.stopPropagation();
            showExitMenu();
        });
    }

    // Слушаем готовность приложения как в оригинале
    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') init();
    });
})();
