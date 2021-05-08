const container = document.querySelector('.container');
const changeSize = document.querySelector('#changeSize');
const reset = document.querySelector('#reset');
let size = 16;
function CreateGrid(){
    for(let i=0;i<size*size;i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
        });
    }
}
function erase() {
    /*const gridItems = document.querySelectorAll('.container > div');
    gridItems.forEach((div) => {
    div.style.backgroundColor = '#fff';
  });*/
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    CreateGrid();
}
function sizeCh() {
    size = parseInt(prompt("Enter the size of the Grid:"));
    erase();
    document.documentElement.style.setProperty('--size', size);
}
reset.addEventListener('click',erase);
changeSize.addEventListener('click',sizeCh);
CreateGrid();
