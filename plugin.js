(function () {
    'use strict';

    function init() {
        // Удаляем старые неудачные кнопки из главного меню (если они там остались)
        $('.menu__item[data-component="custom_yt"], .menu__item[data-component="custom_srv"]').remove();

        // Создаем свое меню вместо стандартного окна выхода
        Lampa.Exit.show = function () {
            Lampa.Select.show({
                title: 'Действие',
                items: [
                    {title: 'YouTube', action: 'yt'},
                    {title: 'RuTube', action: 'rt'},
                    {title: 'Очистить кэш', action: 'clr'},
                    {title: 'Перезагрузка', action: 'rel'},
                    {title: 'Выйти из приложения', action: 'exit'}
                ],
                onSelect: function (item) {
                    if (item.action == 'yt') window.location.href = 'https://www.youtube.com';
                    if (item.action == 'rt') window.location.href = 'https://rutube.ru';
                    if (item.action == 'clr') { localStorage.clear(); window.location.reload(); }
                    if (item.action == 'rel') window.location.reload();
                    if (item.action == 'exit') {
                        // Вызываем настоящий выход
                        navigator.app ? navigator.app.exitApp() : window.close();
                    }
                },
                onBack: function () {
                    Lampa.Select.close();
                }
            });
        };
    }

    // Ждем полной готовности Лампы
    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') init();
    });
})();
