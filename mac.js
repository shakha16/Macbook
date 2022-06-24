let white = document.querySelector('.one')
let macw = document.querySelector('.img')
let wh = document.querySelector('.wh')
let gr = document.querySelector('.gr')
let btns = document.querySelectorAll('data-color')

let macs = {
  White: './images/photo_2022-06-24_15-41-21.jpg',
  Grey: './images/mbp14-silver-select-202110 1.png'
}

for (let btn of btns) {
  btn.onclick = () => {
    let key = btn.innerHTML
    macw.setAttribute('src', macs[key])
  }
}

let btns2 = document.querySelectorAll('button')
let h1 = document.querySelector('.buy')
let orgPrice = 1999

btns2.forEach(btn => {
  btn.onclick = () => {
    btns.forEach(item => item.classList.remove('active'))

    let adPrice = +btn.getAttribute('data-price')

    let temp = orgPrice + adPrice

    temp = String(temp)

    h1.innerHTML = `$${temp[0]},${temp.slice(1)} `

    btn.classList.add('active')
  }
});