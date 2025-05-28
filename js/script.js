
const statuses = ["About", "Stack&Projects"]

let contentMode = {
    "About": {
        "title": "Приветствую, я - PyCode",
        "content": "Хочу рассказать немного о себе, я Python Backend программист c опытом 2 года, для Бекенда использую Flask, но собираюсь перейти на более проффесиональный фреймворк Django"
    },
    "Stack&Projects": {
        "title": "Немного о моем стеке и проектах",
        "content": "Использую то то и то то, проекты такие то и такие то и можете мой гитхаб посетить"
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


