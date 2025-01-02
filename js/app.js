const elInpunt1 = document.getElementById('input-1')
const elInpunt2 = document.getElementById('input-2')
const elInpunt3 = document.getElementById('input-3')
const elButton = document.getElementById('btn')
const elResult = document.getElementById('result')

elButton.addEventListener('click', () =>{
    const elValue1 = elInput1.elValue
    const elValue2 = elInput2.elValue
    const elValue3 = elInput3.elValue

    elResult.textContent = elValue1.replaceAll(elInpunt2, elInpunt3)
})