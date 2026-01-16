(function () {
    setInterval(function(){
        // Ищем окно, где написано "Выход"
        var box = $('.confirm__title:contains("Выход")').parent();
        
        // Если окно открыто и нашей кнопки еще нет
        if (box.length > 0 && $('.my-yt').length == 0) {
            
            // Создаем кнопку в стиле твоей Лампы
            var btn = $('<div class="confirm__button selector my-yt">YouTube</div>');
            
            // При нажатии - переход
            btn.on('click', function(){
                window.location.href = 'https://www.youtube.com';
            });

            // Вставляем кнопку в список
            box.find('.confirm__content').append(btn);
            
            // Заставляем пульт "увидеть" новую кнопку
            if(window.Lampa) Lampa.Controller.toggle('confirm');
        }
    }, 500);
})();
