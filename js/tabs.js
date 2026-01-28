// Получаем все кнопки табов
const tabButtons = document.querySelectorAll('.design-list__item');

// Получаем все описания табов
const tabDescription = document.querySelectorAll('.design__descr');

// Получаем все изображения табов
const tabImages = document.querySelectorAll('.design-images');

// 
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

        // Обновляем заголовок вкладки на текст кнопки таба
        document.title = tabButton.textContent.trim();

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

// Устанавливаем заголовок при загрузке страницы для активного таба
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.design-list__item_active');
    if (activeTab) {
        document.title = activeTab.textContent.trim();
    }
});