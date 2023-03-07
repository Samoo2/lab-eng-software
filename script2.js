document.addEventListener("DOMContentLoaded", () => {

    function exibirHora() {

        let dataAtual = new Date();

        let hrs = dataAtual.getHours();
        let min = dataAtual.getMinutes();
        let seg = dataAtual.getSeconds();

        if (hrs < 10) {
            hrs = "0" + hrs;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (seg < 10) {
            seg = "0" + seg;
        }

        horarioAtual = hrs + ":" + min + ":" + seg;
        
        document.getElementById("relogio").textContent = horarioAtual;
        setTimeout(exibirHora, 1000); // Chama o setTimeout() novamente após 1 segundo
      }
    
      // Inicializa o relógio
      exibirHora();


});