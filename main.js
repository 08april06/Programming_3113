let count = 0;

const total = document.getElementsByTagName("h1")[0];
const plus_btn = document.getElementsByTagName("button")[0];

plus_btn.addEventListener("click", function () {
    count++;
    total.innerHTML = count;
});

