(function () {
    'use strict';

    function createSimpleMenu() {
        // Если кнопки уже есть, не дублируем
        if (document.getElementById('custom-yt-btn')) return;

        // Ищем контейнер меню на экране
        var menuList = document.querySelector('.menu__list');
        
        if (menuList) {
            // Создаем HTML кнопки YouTube
            var ytBtn = document.createElement('div');
            ytBtn.id = 'custom-yt-btn';
            ytBtn.className = 'menu__item selector';
            ytBtn.innerHTML = '<div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 15l5.197-3L10 9v6z" fill="white"/></svg></div><div class="menu__text">YouTube</div>';
            
            // Создаем HTML кнопки Перезагрузка
            var reloadBtn = document.createElement('div');
            reloadBtn.id = 'custom-reload-btn';
            reloadBtn.className = 'menu__item selector';
            reloadBtn.innerHTML = '<div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8z" fill="white"/></svg></div><div class="menu__text">Обновить</div>';

            // Назначаем действия
            ytBtn.onclick = function() { window.location.href = 'https://www.youtube.com'; };
            reloadBtn.onclick = function() { window.location.reload(); };

            // Добавляем кнопки в конец списка
            menuList.appendChild(ytBtn);
            menuList.appendChild(reloadBtn);
        }
    }

    // Запускаем проверку каждые 2 секунды, чтобы кнопки не пропадали
    setInterval(createSimpleMenu, 2000);
})();
