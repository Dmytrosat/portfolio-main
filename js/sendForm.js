// Получаем все формы на странице
const forms = document.querySelectorAll('form');

// Перебираем все формы
forms.forEach((form) => {
    // Обработчик отправки формы
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const body = {};

        formData.append('form', form.classList.value);

        formData.forEach((value, field) => {
            body[field] = value;
        });

        // Отправка данных на сервер
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    body,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }

            })
            .then((data) => {
                alert('Форма отправлена успешно!');
            })
            .catch((error) => {
                alert('Данные не отправлены, произошла ошибка!' + error.message);
            })
            .finally(() => {
                form.reset();
            })
    });
});