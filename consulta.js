function nome(){
    let name = prompt("Digite seu nome:")
    let n1 = Number (window.prompt("Digite a primeira nota: "))
    let n2 = Number (window.prompt("Digite a segunda nota: "))
    let n3 = Number (window.prompt("Digite a terceira nota: "))
    media = (n1+n2+n3)/3


    if(media>=6){
    document.querySelector(".vic").innerHTML= ("O aluno " +name+ " foi aprovado, sua média é: " +media)
    }
    else{
        document.querySelector(".vic").innerHTML= ("O aluno " +name+ " foi reprovado, sua média é: " +media)
    }
}
