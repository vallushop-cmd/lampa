(function () {
    'use strict';

    function init() {
        // Создаем функцию нашего кастомного меню
        var showMyMenu = function() {
            Lampa.Select.show({
                title: 'Сервис и Выход',
                items: [
                    {title: 'YouTube', action: 'yt'},
                    {title: 'RuTube', action: 'rt'},
                    {title: 'Очистить кэш', action: 'clr'},
                    {title: 'Перезагрузка', action: 'rel'},
                    {title: 'Выход', action: 'exit'}
                ],
                onSelect: function (item) {
                    if (item.action == 'yt') window.location.href = 'https://www.youtube.com';
                    if (item.action == 'rt') window.location.href = 'https://rutube.ru';
                    if (item.action == 'clr') { localStorage.clear(); window.location.reload(); }
                    if (item.action == 'rel') window.location.reload();
                    if (item.action == 'exit') {
                        // Пытаемся закрыть приложение разными способами
                        if(window.appready) Lampa.Activity.out();
                        else window.location.reload();
                    }
                },
                onBack: function () {
                    Lampa.Select.close();
                }
            });
        };

        // Находим кнопку "Выход" в меню и подменяем её действие
        $(document).on('click', '.menu__item[data-component="exit"]', function (e) {
            e.preventDefault();
            e.stopPropagation();
            showMyMenu();
        });
        
        // Резервный вариант: если нажать на пункт с иконкой выхода
        $('.menu__item:contains("Выход")').off('click').on('click', function(e){
            e.preventDefault();
            showMyMenu();
        });
    }

    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') init(); });
})();
