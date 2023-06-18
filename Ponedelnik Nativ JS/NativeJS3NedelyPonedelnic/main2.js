// function =>
// handler (обработчик)? listener ( слушатель ), subscriber ( подписчик )
// - при наступлении события
// function(event) - вызов функции
// const event = new MouseEvent({}) = объект, который содержит сведения о событии
// event, ev, e === new Event()

// [] === new Array()
// {} === new Object()
// const map = new Map()
//const set = new Set()

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

function handler_1() {
    alert('yo')
}
function handler_2() {
    alert('Hey')
}
function handler_3(e) {
    console.log()(e.currentTarget.id)
}




// const anonymus = () => handler_1('yo')
// const anonymusNext = () => handler_1('yo')
//
// sm.onclick = anonymus
//
// sm.onclick = anonymusNext


// sm.addEventListener('click', handler_1, {once: true}) // onClick
// sm.addEventListener('click', handler_2)
// sm.removeEventListener('click', handler_1)

sm.addEventListener('click', handler_3, {capture: true})
md.addEventListener('click', handler_3)
bg.addEventListener('click', handler_3)