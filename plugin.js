(function () {
    'use strict';

    function injectExitMenu() {
        // Ищем окно, где есть текст "Выход" или "Да, выйти"
        var exitWindow = $('.interaction-exit, .ui-exit, .modal').filter(function() {
            return $(this).text().indexOf('Выход') > -1 || $(this).text().indexOf('выйти') > -1;
        });

        if (exitWindow.length > 0 && !exitWindow.find('.custom-exit-group').length) {
            // Создаем контейнер для наших кнопок
            var container = $('<div class="custom-exit-group" style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;"></div>');
            
            // Сами кнопки (стили подбираем под стандартные кнопки Лампы)
            var btnStyle = 'margin: 5px 0; padding: 10px; background: rgba(255,255,255,0.1); text-align: center; border-radius: 5px; cursor: pointer;';
            
            var yt = $('<div class="selector" style="'+btnStyle+'">YouTube</div>');
            var rt = $('<div class="selector" style="'+btnStyle+'">RuTube</div>');
            var clr = $('<div class="selector" style="'+btnStyle+'">Очистить кэш</div>');
            var rel = $('<div class="selector" style="'+btnStyle+'">Перезагрузка</div>');

            // Навешиваем действия
            yt.on('click', function() { window.location.href = 'https://www.youtube.com'; });
            rt.on('click', function() { window.location.href = 'https://rutube.ru'; });
            clr.on('click', function() { localStorage.clear(); window.location.reload(); });
            rel.on('click', function() { window.location.reload(); });

            // Добавляем кнопки в окно выхода
            container.append(yt).append(rt).append(clr).append(rel);
            exitWindow.find('.interaction-content, .modal__content, div:last-child').last().append(container);
            
            // Обновляем навигацию пульта, чтобы кнопки стали кликабельными
            if (window.Lampa && Lampa.Controller) Lampa.Controller.add('content');
        }
    }

    // Запускаем постоянную слежку за появлением окна выхода
    setInterval(injectExitMenu, 500);

})();
