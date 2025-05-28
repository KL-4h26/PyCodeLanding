
const statuses = ["About", "Stack&Projects"]

let contentMode = {
    "About": {
        "title": "Приветствую, я - PyCode",
        "content": `Тут будет немного обо мне, пока тут ничего нет.
            Сайт в разработке
        `
    },
    "Stack&Projects": {
        "title": "Немного о моем стеке и проектах",
        "content": `Backend-разработка:
            Основной инструмент для бэкенда — микрофреймворк Flask. Имею обширный практический опыт создания разнообразных проектов на нем, от учебных до полноценных веб-приложений.

            Telegram-боты:
            Для разработки ботов использую современный асинхронный фреймворк aiogram. В случаях, когда требуется работа с базой данных, применяю aiosqlite — легкое и эффективное асинхронное решение для SQLite.

            Парсинг данных:
            В работе с парсингом предпочитаю связку requests + BeautifulSoup (bs4) за их простоту, гибкость и надежность в обработке HTML.

            Дополнительные навыки:

            - Уверенное владение MySQL
            - Опыт работы с Git
            - Деплой сайтов
            - Работа с Linux


            Я делал много тестовых проектов когда учился, делал реальные проекты для заказчиков
            Вы можете посмотреть пару моих проектов на гитхаб 'который я увы подзабросил, но собираюсь вернутся'  
        `
    }
}

function nextPage(status){
    // Изменение заголовка
    let get_title = document.getElementsByTagName("title")
    let tilte = document.getElementById("tlt")
    let content = document.getElementById("content")

    // Изменение содержимого
    if (statuses.includes(status)){
        get_title[0].textContent = `PyCode - ${status}`

        tilte.textContent = contentMode[status]["title"]
        content.textContent = contentMode[status]["content"]
    }
}


