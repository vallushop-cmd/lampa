(function () {
    if (!window.Lampa) return;

    // Универсальный плагин YouTube для Lampa
    Lampa.Activity.push({
        title: 'YouTube',             // название пункта
        component: 'external',        // внешний источник
        icon: 'youtube',              // стандартная иконка Lampa
        url: (function() {
            // Если Tizen, используем системное приложение, иначе веб
            if (window.tizen) return 'tizen://launch?appId=111299001912';
            return 'https://www.youtube.com/tv';
        })()
    });
})();
