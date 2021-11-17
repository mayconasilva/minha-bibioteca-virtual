function data() {
    const DATE = new Date()
    const onde = document.getElementById("hoje")
    let dia = DATE.getDate()
    let day = DATE.getDay()
    let mes = DATE.getMonth()
    let ano = DATE.getFullYear()
    let nomedomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let nomedodia = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    let month = nomedomes[mes]
    onde.innerHTML = `${dia} de ${month} de ${ano}| ${nomedodia[day]}`
}