(function () {
    'use strict';

    function startExitPlugin() {
        // Подменяем стандартную функцию выхода Lampa
        Lampa.Exit.show = function () {
            Lampa.Select.show({
                title: 'Меню выхода',
                items: [
                    {
                        title: 'YouTube TV',
                        action: 'youtube'
                    },
                    {
                        title: 'RuTube TV',
                        action: 'rutube'
                    },
                    {
                        title: 'Перезагрузить Лампу',
                        action: 'reload'
                    },
                    {
                        title: 'Выйти из приложения',
                        action: 'exit'
                    }
                ],
                onSelect: function (item) {
                    if (item.action === 'youtube') {
                        window.location.href = 'https://www.youtube.com/tv';
                    } else if (item.action === 'rutube') {
                        window.location.href = 'https://rutube.ru/tv-release/';
                    } else if (item.action === 'reload') {
                        window.location.reload();
                    } else if (item.action === 'exit') {
                        // Логика выхода для разных платформ
                        if (Lampa.Platform.is('tizen')) {
                            tizen.application.getCurrentApplication().exit();
                        } else if (Lampa.Platform.is('webos')) {
                            window.close();
                        } else if (Lampa.Platform.is('android')) {
                            Lampa.Android.exit();
                        } else {
                            window.location.href = 'about:blank';
                        }
                    }
                },
                onBack: function () {
                    // Возвращаем фокус в основное меню при нажатии "Назад"
                    Lampa.Select.close();
                    Lampa.Controller.toggle('content');
                }
            });
        };
    }

    // Ждем, пока Lampa полностью загрузится, прежде чем активировать плагин
    if (window.appready) {
        startExitPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                startExitPlugin();
            }
        });
    }
})();
