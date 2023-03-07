const resultado = document.getElementById('resultado')
const total = document.getElementById('res')
const clear = document.getElementById('limpa')
const apagar = document.getElementById('apaga')

function insert(n) {
    resultado.innerText += n
}
clear.addEventListener('click', () => {
    resultado.innerText = ''
})
apagar.addEventListener('click', () => {
    if (resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
})
total.addEventListener('click', () => {
    if (resultado != '') {
        const resNumeros = eval(resultado.innerHTML)
        const limitNumeros = Number(resNumeros.toFixed(5))
        resultado.innerHTML += `<br><p>${limitNumeros}</p>`
    } else {
        resultado.innerHTML = ''
    }
})
