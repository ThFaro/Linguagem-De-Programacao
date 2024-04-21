let buttons = document.querySelectorAll('a', '.btn');
let minhaUrl = window.location.href;


for (let button of buttons){
    if (button.href === minhaUrl){
       button.classList.add("active")
    }
}
