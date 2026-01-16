(function () {
    'use strict';

    function init() {
        // Подменяем только функцию показа меню выхода
        Lampa.Exit.show = function () {
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
                    else if (item.action == 'rt') window.location.href = 'https://rutube.ru/tv-release/';
                    else if (item.action == 'rel') window.location.reload();
                    else if (item.action == 'exit') {
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
    }

    // Минимальный запуск без лишних проверок
    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') init(); });
})();
