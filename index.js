let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.card');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
        let dataFilter = this.getAttribute('data-filter');

        for (let a = 0; a < itemBox.length; a++) {
            itemBox[a].classList.remove("active");
            itemBox[a].classList.add("hide");
            console.log(dataFilter, itemBox[k].getAttribute("data-item"))
            if (itemBox[a].getAttribute("data-item") == dataFilter || dataFilter == "All") {
                itemBox[a].classList.remove("hide");
                itemBox[a].classList.add("active");
            }
        }
    })
}
