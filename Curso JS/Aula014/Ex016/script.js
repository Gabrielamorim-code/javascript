function contar(){
    let ini = document.getElementById("txti") //obtendo variavel do HTML
    let fim = document.getElementById("txtf") //obtendo variavel do HTML
    let passo = document.getElementById("txtp") //obtendo variavel do HTML
    let res = document.getElementById("res") //obtendo variavel do HTML

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossivel Contar" //Validação se todos os campos estao preenchidos
        //window.alert("[ERRO] Faltam dados!")
    }else{
       res.innerHTML = "Contando: <br>"
       let i = Number(ini.value) //Conversao dos valores das variaveis
       let f = Number(fim.value) //Conversao dos valores das variaveis
       let p = Number(passo.value) //Conversao dos valores das variaveis
       if(p <=0){ //Validação se o passo é igual a 0
           window.alert("Passo invalido! Considerado passo 1")
           p=1 //setando o passo para 1 caso seja digitado 0
       }
       if(i < f){ 
           //Contagem Crescente
            for(let c= i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F449} `
            }
            
        } else {
            //Contnagem regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}` //emoji maozinha apontando pra direita
            }
       }
       res.innerHTML += `\u{1F3C1}` //emoji bandeira
    }
}