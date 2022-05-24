const list = document.querySelectorAll('.list');
const itemBox = document.querySelectorAll('.itemBox')

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        removeActive()
        this.classList.add('active')

        let dataFilter = this.getAttribute('data-filter')

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active')
            itemBox[k].classList.add('hide')

            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                itemBox[k].classList.remove('hide')
                itemBox[k].classList.add('active')
            }
        }
    })
}

function removeActive() {
    for (let j = 0; j < list.length; j++) {
        list[j].classList.remove('active')
    }
}
