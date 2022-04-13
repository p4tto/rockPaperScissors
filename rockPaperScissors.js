const numero = function(min, max){
    return Math.round(Math.random()* (max - min) + min)
}

const definirElemento = function(num){
    switch(num){
        case 1:
            num = "Pedra"
            break
        case 2:
            num = "Papel"
            break
        case 3:
            num = "Tesoura"
            break
    }
    return num
}

function pedrapapeltesoura(num){
    let nc = numero(1,3)
    let np = num
    let subt = np - nc

    let pc = definirElemento(nc)
    let player = definirElemento(np)
    let resultado= '';

    if(subt == 2 || subt == -1){
        resultado = 'Você perdeu! '
    }else if(subt == -2 || subt == 1){
        resultado = 'Você ganhou! '
    }else resultado = "Empate! "

    return resultado + `Você escolheu ${player} e o bot escolheu ${pc}`
}

console.log(pedrapapeltesoura(2))