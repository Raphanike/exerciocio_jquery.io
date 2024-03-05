let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
let valorInput = input.value;

if  ((valorInput !== " ") && (valorInput !== null) && (valorInput !== undefined)) {
    ++contador;

    let novoItem = `<li><div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="item-icone">
    </div>
    <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
        
    </div>
</div>`

main.innerHTML += novoItem
input.value = ""
input.focus()
}
}
function marcarTarefa(id) {
var item = document.getElementById(id)
var classe = item.getAttribute("class")
console.log(classe)
if (classe == "item") {
    item.classList.add("clicado")
}
}
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
    e.preventDefault()
    btnAdd.click()
}
})
