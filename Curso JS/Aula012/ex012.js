var Agora = new Date
var hora = Agora.getHours()
var minutos = Agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)
if(hora < 12){
    console.log("Bom dia")
}else if(hora <=18){
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}