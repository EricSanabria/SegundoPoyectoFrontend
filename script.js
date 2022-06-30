const buttonList = document.querySelector('#buttonList')
const container = document.querySelector('#container')

buttonList.addEventListener('click', ()=>{
    container.classList.toggle('active')
}
)

