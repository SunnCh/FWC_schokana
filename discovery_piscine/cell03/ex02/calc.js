setInterval(function() {
    alert('Please, use me...');
}, 30000);

document.getElementById('calc-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const leftVal = document.getElementById('left-op').value.trim();
    const rightVal = document.getElementById('right-op').value.trim();
    const op = document.getElementById('operator').value;

    const isInteger = /^\d+$/;

    if (!isInteger.test(leftVal) || !isInteger.test(rightVal)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftVal, 10);
    const rightNum = parseInt(rightVal, 10);

    if ((op === '/' || op === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    alert(result);
    console.log(result);
});