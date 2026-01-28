// Получаем все кнопки табов
const tabButtons = document.querySelectorAll('.design-list__item');

// Получаем все описания табов
const tabDescription = document.querySelectorAll('.design__descr');

// Получаем все изображения табов
const tabImages = document.querySelectorAll('.design-images');

// Функция для получения заголовка из активного таба
const getTabTitle = (value) => {
    // Находим активный элемент описания
    const activeDescr = Array.from(tabDescription).find(elem => 
        elem.dataset.tabsField === value && !elem.classList.contains('hidden')
    );
    
    if (activeDescr) {
        // Ищем заголовок внутри активного описания (может быть h2, h3, h4 или первый элемент с текстом)
        const heading = activeDescr.querySelector('h1, h2, h3, h4, h5, h6');
        
        if (heading) {
            return heading.textContent.trim();
        } else {
            // Если нет заголовка, берем первый текстовый контент
            return activeDescr.textContent.trim().split('\n')[0].trim();
        }
    }
    
    return document.title; // Возвращаем текущий заголовок, если не нашли
};

// Функция для изменения заголовка вкладки
const updatePageTitle = (value) => {
    const tabTitle = getTabTitle(value);
    if (tabTitle) {
        document.title = tabTitle;
    }
};

// Функция для изменения контента табов
const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });
};

// Добавляем обработчик клика на каждую кнопку таба
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabDescription, dataValue);
        changeContent(tabImages, dataValue);

        // Обновляем заголовок вкладки
        updatePageTitle(dataValue);

        // Обновляем активный класс на кнопках табов
        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });
    });
});

// Обновляем заголовок при загрузке страницы для активного таба
document.addEventListener('DOMContentLoaded', () => {
    // Находим активную кнопку таба
    const activeTab = document.querySelector('.design-list__item_active');
    if (activeTab) {
        const activeValue = activeTab.dataset.tabsHandler;
        updatePageTitle(activeValue);
    }
});