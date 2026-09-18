window.onload = function() {
    loadFromCookie();

    document.getElementById('new-btn').addEventListener('click', function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText.trim(), true);
        }
    });
};

function addTodo(text, isNew) {
    const ftList = document.getElementById('ft_list');
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
        if (confirm("Do you really want to remove this TO DO?")) {
            todoDiv.remove();
            saveToCookie();
        }
    });

    if (isNew) {
        ftList.prepend(todoDiv);
        saveToCookie();
    } else {
        ftList.appendChild(todoDiv);
    }
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function saveToCookie() {
    const ftList = document.getElementById('ft_list');
    const items = [];
    for (let i = 0; i < ftList.children.length; i++) {
        items.push(ftList.children[i].textContent);
    }
    setCookie('ft_todo_list', JSON.stringify(items), 7);
}

function loadFromCookie() {
    const cookieData = getCookie('ft_todo_list');
    if (cookieData) {
        try {
            const items = JSON.parse(cookieData);
            const ftList = document.getElementById('ft_list');
            ftList.innerHTML = '';
            items.forEach(text => {
                addTodo(text, false);
            });
        } catch (e) {
            console.error("Error parsing todo cookie:", e);
        }
    }
}