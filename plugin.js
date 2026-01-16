(function () {
    'use strict';

    function init() {
        // Слушаем нажатия во всем приложении
        $(document).on('click', '[data-component="exit"]', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Вызываем наше кастомное меню
            Lampa.Select.show({
                title: 'Сервис и Выход',
                items: [
                    {title: 'YouTube', action: 'yt'},
                    {title: 'RuTube', action: 'rt'},
                    {title: 'Очистить кэш', action: 'clr'},
                    {title: 'Перезагрузка', action: 'rel'},
                    {title: 'Выйти из Лампы', action: 'exit'}
                ],
                onSelect: function (item) {
                    if (item.action == 'yt') window.location.href = 'https://www.youtube.com/tv';
                    if (item.action == 'rt') window.location.href = 'https://rutube.ru/tv-release/';
                    if (item.action == 'clr') { localStorage.clear(); window.location.reload(); }
                    if (item.action == 'rel') window.location.reload();
                    if (item.action == 'exit') {
                        // Универсальный способ выхода для всех платформ
                        if (window.tizen) window.tizen.application.getCurrentApplication().exit();
                        else if (window.webOS) window.close();
                        else window.location.href = 'about:blank';
                    }
                },
                onBack: function () {
                    Lampa.Select.close();
                }
            });
        });
    }

    // Запуск
    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') init(); });
})();
