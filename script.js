const list = document.querySelectorAll('.list');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        removeActive()
        this.classList.add('active')
    })
}

function removeActive() {
    for (let j = 0; j < list.length; j++) {
        list[j].classList.remove('active')
    }
}