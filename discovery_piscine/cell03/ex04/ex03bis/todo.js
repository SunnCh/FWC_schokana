$(document).ready(function() {
    loadFromCookie();

    $('#new-btn').click(function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText.trim(), true);
        }
    });

    // Delegated click event for removing items
    $('#ft_list').on('click', 'div', function() {
        if (confirm("Do you really want to remove this TO DO?")) {
            $(this).remove();
            saveToCookie();
        }
    });
});

function addTodo(text, isNew) {
    const $todoDiv = $('<div></div>').text(text);

    if (isNew) {
        $('#ft_list').prepend($todoDiv);
        saveToCookie();
    } else {
        $('#ft_list').append($todoDiv);
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
    const items = [];
    $('#ft_list div').each(function() {
        items.push($(this).text());
    });
    setCookie('ft_todo_list', JSON.stringify(items), 7);
}

function loadFromCookie() {
    const cookieData = getCookie('ft_todo_list');
    if (cookieData) {
        try {
            const items = JSON.parse(cookieData);
            $('#ft_list').empty();
            items.forEach(text => {
                addTodo(text, false);
            });
        } catch (e) {
            console.error("Error parsing todo cookie:", e);
        }
    }
}