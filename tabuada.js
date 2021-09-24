function tabuada() {
    let numero = document.querySelector('input#numtab')
    let select = document.querySelector('select#select')
    if (numero.value.length === 0 ) {
        alert('Erro!! Digite um número')
    }
    else {
        var n = Number(numero.value)
        select.innerHTML = ""
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            select.appendChild(item)
        }
    }
}