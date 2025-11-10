let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        switch (value) {
            case '=':
                try {
                    string = Function(`return ${string}`)(); 
                    input.value = string;
                } catch {
                    input.value = "Error";
                    string = "";
                }
                break;

            case 'AC':
                string = "";
                input.value = string;
                break;

            case 'DEL':
                string = string.slice(0, -1);
                input.value = string;
                break;

            default:
                string += value;
                input.value = string;
        }
    });
});
