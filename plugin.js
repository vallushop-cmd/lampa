(function () {
    "use strict";

    // Добавляем переводы (безопасно)
    if (window.Lampa && Lampa.Lang) {
        Lampa.Lang.add({
            exit_menu: {
                ru: "Выход",
                en: "Exit",
                uk: "Вихід",
                be: "Вынахад",
                zh: "出口",
                pt: "Saída",
                bg: "Изход"
            }
        });
    }

    function add() {
        // Проверка: если кнопка уже есть, не добавляем вторую
        if ($('.menu__item[data-action="exit_r"]').length > 0) return;

        var ico = '<svg version="1.1" id="exit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width:1.5em; height:1.5em;"><g><path fill="currentColor" d="M256,5.1c138.6,0,250.9,112.3,250.9,250.9S394.6,506.9,256,506.9S5.1,394.6,5.1,256S117.4,5.1,256,5.1z M256,40.1C136.7,40.1,40.1,136.7,40.1,256S136.7,471.9,256,471.9S471.9,375.3,471.9,256S375.3,40.1,256,40.1z M311.4,176.6 c6.7-6.7,17.5-6.7,24.2,0c6.7,6.7,6.7,17.5,0,24.2l-55.1,55.1l55.1,55c6.7,6.7,6.7,17.5,0,24.2c-6.7,6.7-17.5,6.7-24.2,0L256.3,280 l-55.1,55.1c-6,6-15.4,6.6-22.1,1.8l-2.2-1.8c-6.7-6.7-6.7-17.5,0-24.2l55.1-55l-55.1-55c-6.7-6.7-6.7-17.5,0-24.2s17.5-6.7,24.2,0 l55.1,55.1L311.4,176.6z"/></g></svg>';
        
        var menu_items = $(
            '<li class="menu__item selector" data-action="exit_r"><div class="menu__ico">' +
            ico +
            '</div><div class="menu__text">' +
            (Lampa.Lang ? Lampa.Lang.translate("exit_menu") : "Выход") +
            "</div></li>"
        );

        // Обработка нажатия
        menu_items.on("click hover:enter", function () {
            if (window.Lampa && Lampa.Activity) Lampa.Activity.out();
            
            if (Lampa.Platform.is('apple_tv')) window.location.assign('exit://exit');
            else if (
