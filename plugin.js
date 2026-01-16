(function () {
    if (!window.Lampa) return;

    // ждём, когда приложение готово
    window.addEventListener('app:ready', function () {

        // добавить пункт в меню
        Lampa.MainMenu.add({
            title: 'YouTube',
            icon: 'youtube',
            source: 'external',
            url: 'tizen://launch?appId=111299001912'
        });

    });
})();
