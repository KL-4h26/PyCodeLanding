
const statuses = ["About", "Stack&Projects"]

let contentMode = {
    "About": {"title": "Приветствую, я - PyCode", "content": "Тут я рассказываю о себе и тд и тп"},
    "Stack&Projects": {"title": "Немного о моем стеке и проектах", "content": "Использую то то и то то, проэкты такие то и такие то и можете мой гитхаб посетить"}
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


