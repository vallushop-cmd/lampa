(function () {
    if (!window.Lampa) return;

    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            Lampa.MainMenu.add({
                title: 'YouTube',
                icon: 'youtube',
                onClick: function () {
                    Lampa.Platform.open('https://www.youtube.com');
                }
            });
        }
    });
})();
