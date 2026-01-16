(function () {
    'use strict';

    function init() {
        // Константы иконок и названий из твоего кода
        var icons = {
            exit: '<div class="settings-folder" style="padding:0!important"><div style="width:2.2em;height:1.7em;padding-right:.5em"><svg width="256px" height="256px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div style="font-size:1.3em">Закрыть приложение</div></div>',
            reload: '<div class="settings-folder" style="padding:0!important"><div style="width:2.2em;height:1.7em;padding-right:.5em"><svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path style="fill:currentColor" d="M11 2a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 4.676-1.324l-1.461-1.461A7 7 0 0 1 11 18a7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 4.676 1.324l1.461-1.461A9 9 0 0 0 11 2z"></path></svg></div><div style="font-size:1.3em">Перезагрузить</div></div>',
            yt: '<div class="settings-folder" style="padding:0!important"><div style="width:2.2em;height:1.7em;padding-right:.5em"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path fill="currentColor" d="M31.328 8.271a4 4 0 0 0-2.787-2.781c-2.495-.667-12.525-.667-12.525-.667S6.005 4.807 3.484 5.49A4 4 0 0 0 .703 8.271a41.6 41.6 0 0 0-.697 7.745a42 42 0 0 0 .697 7.708a4.02 4.02 0 0 0 2.781 2.787c2.495.667 12.532.667 12.532.667s10.005 0 12.525-.667a4.02 4.02 0 0 0 2.787-2.787c.459-2.541.683-5.125.667-7.708.016-2.6-.203-5.188-.667-7.745M12.812 20.803v-9.595l8.349 4.808z"/></svg></div><div style="font-size:1.3em">YouTube</div></div>'
        };

        // Функция закрытия (взято из твоего кода)
        function terminate() {
            if (Lampa.Platform.is('tizen')) tizen.application.getCurrentApplication().exit();
            else if (Lampa.Platform.is('webos')) window.close();
            else if (Lampa.Platform.is('android')) Lampa.Android.exit();
            else window.location.href = 'about:blank';
        }

        // Подмена системного метода Выхода
        Lampa.Exit.show = function () {
            Lampa.Select.show({
                title: 'Меню Выход',
                items: [
                    {title: icons.yt, action: 'yt'},
                    {title: icons.reload, action: 'rel'},
                    {title: icons.exit, action: 'exit'}
                ],
                onSelect: function (item) {
                    if (item.action == 'yt') window.location.href = 'https://www.youtube.com/tv';
                    if (item.action == 'rel') window.location.reload();
                    if (item.action == 'exit') terminate();
                },
                onBack: function () {
                    Lampa.Select.close();
                    Lampa.Controller.toggle('content');
                }
            });
        };

        // Добавляем пункт в настройки, чтобы плагин "прописался" (как в оригинале)
        Lampa.SettingsApi.addParam({
            component: 'back_menu',
            param: { name: 'back_menu_enabled', type: 'select', values: {1: 'Включено'}, default: '1' },
            field: { name: 'Кастомный Выход', description: 'Плагин активен' }
        });
    }

    // Запуск при готовности
    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') init(); });
})();
