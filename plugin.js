(function () {

    if (!window.Lampa) return;

    // Ждём, когда всё загрузится
    Lampa.Listener.follow('app', function (e) {
        if (e.type !== 'ready') return;

        // Добавляем в меню YouTube
        Lampa.MainMenu.add({
            title: 'YouTube',
            icon: 'youtube',
            onClick: function () {
                // для Tizen запускаем системный YouTube
                Lampa.Platform.open('tizen://launch?appId=111299001912');
            }
        });

        // Обновляем меню
        Lampa.Controller.update('menu');
    });

})();
