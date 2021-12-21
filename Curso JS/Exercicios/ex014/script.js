function carregar(){
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date
var hora = data.getHours()
//var hora = 14
msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // bom dia!
        img.src= "fotomanha.png"
        document.body.style.background = "#f5ba81"
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src="fototarde.png"
        document.body.style.background="#ba6827"
    }else{
        //Boa noite
        img.src="fotonoite.png"
        document.body.style.background="#051c32"
    }
}