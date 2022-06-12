const colors = ["Green",'Blue','Yellow','Brown','Pink','Red'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
    const randomColor = Math.floor((Math.random() * 5) + 1);
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});
