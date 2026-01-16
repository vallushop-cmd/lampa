(function () {
    'use strict';

    function injectButtons() {
        // Проверяем, есть ли уже кнопки, чтобы не плодить их
        if (document.querySelector('[data-component="custom_yt"]')) return;

        // Ищем список меню по его классу
        var menuList = document.querySelector('.menu__list');
        
        if (menuList) {
            // Создаем кнопку YouTube
            var yt = document.createElement('div');
            yt.className = 'menu__item selector';
            yt.setAttribute('data-component', 'custom_yt');
            yt.innerHTML = '<div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l5.197-3L10 9v6z" fill="white"/><path d="M21.564 7.147c-.243-.907-.954-1.618-1.861-1.86-1.641-.44-8.203-.44-8.203-.44s-6.562 0-8.203.44c-.907.242-1.618.953-1.86 1.86-.44 1.64-.44 5.063-.44 5.063s0 3.423.44 5.063c.242.907.953 1.618 1.86 1.86 1.641.44 8.203.44 8.203.44s6.562 0 8.203-.44c.907-.242 1.618-.953 1.861-1.86.44-1.64.44-5.063.44-5.063s0-3.423-.44-5.063z" fill="white"/></svg></div><div class="menu__text">YouTube</div>';
            
            // Создаем кнопку Сервис
            var srv = document.createElement('div');
            srv.className = 'menu__item selector';
            srv.setAttribute('data-component', 'custom_srv');
            srv.innerHTML = '<div class="menu__ico"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="white" stroke-width="2" fill="none"/><path d="M12 7v5l3 3" stroke="white" stroke-width="2" fill="none"/></svg></div><div class="menu__text">Сервис</div>';

            // Логика нажатий
            yt.onclick = function() {
                window.location.href = 'https://www.youtube.com';
            };

            srv.onclick = function() {
                if (confirm('Очистить кэш и перезагрузить?')) {
                    localStorage.clear();
                    window.location.reload();
                }
            };

            // Добавляем в конец меню
            menuList.appendChild(yt);
            menuList.appendChild(srv);
        }
    }

    // Запускаем проверку каждые 2 секунды (безотказный метод)
    setInterval(injectButtons, 2000);

})();
