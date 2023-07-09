// Изменение, которое браузер может отследить=> событие
//событие => браузер вызывает функцию обработчик.
// Обработчик, слушатель подписчик,
// Обработчик должен быть назначен

//событие => {...} = > handler({...})
// {...} => event,ev,e

const handler = (event) => {
    event.stopPropagation()
  if(event.target.tagName === 'BUTTON'){
      alert('sos')
  }
}

const handler2 = () => {
    alert('sos-2')
}



const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = handler
sm.onclick = (e) => {}
sm.onclick = undefined
sm.onclick = null

sm.addEventListener('click', handler)
md.addEventListener('click', (e)=>{
    e.stopPropagation()
    alert('wow')})
bg.addEventListener('click', ()=>{alert('boom')})

const a = document.getElementById('a')
a.addEventListener('click',(e)=>{
    e.preventDefault() // предотвращение события ссылки
    alert('capcap')
})
