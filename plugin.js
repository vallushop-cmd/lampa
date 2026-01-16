(function() {
    if (!window.Lampa) return;

    function addYouTubeButton() {
        var menu = Lampa.Controller.collection('menu');
        if (!menu) return;

        // Проверяем, чтобы не добавить дважды
        if (menu.find(function(e){ return e.title === 'YouTube'; })) return;

        // Добавляем пункт в начало меню
        menu.unshift({
            title: 'YouTube',
            component: 'external',
            icon: 'youtube',
            onClick: function() {
                // Запуск системного YouTube на Tizen
                Lampa.Platform.open('tizen://launch?appId=111299001912');
            }
        });

        // Обновляем меню
        Lampa.Controller.update('menu');
    }

    // Ждём загрузки приложения
    Lampa.Listener.follow('app', function(e) {
        if (e.type === 'ready') {
            // На некоторых ТВ меню подгружается чуть позже
            setTimeout(addYouTubeButton, 500);
        }
    });
})();
