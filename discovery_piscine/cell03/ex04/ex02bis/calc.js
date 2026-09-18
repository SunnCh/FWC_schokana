$(document).ready(function() {
    setInterval(function() {
        alert('Please, use me...');
    }, 30000);

    $('#calc-form').submit(function(e) {
        e.preventDefault();

        const leftVal = $('#left-op').val().trim();
        const rightVal = $('#right-op').val().trim();
        const op = $('#operator').val();

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
});