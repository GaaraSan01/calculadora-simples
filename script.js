function insert (n){
    resultado.innerText += n
}
limpa.addEventListener('click', () => {
    resultado.innerText = ''
})
apaga.addEventListener('click', () => {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
})
res.addEventListener('click', () => {
    if(resultado != ''){
        resultado.innerHTML += `<br>${eval(resultado.innerHTML)}`
    }else{
        resultado.innerHTML = ''
    }
})
