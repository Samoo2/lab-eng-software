document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("meuBotao").addEventListener("click", () => {

        function verificarPalindromo(palavra) {

            let palavraFormatada = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[\W_]/g, '');
            return palavraFormatada === palavraFormatada.split("").reverse().join("");
        }

        function verificar() {
            let frase = document.getElementById("frase").value;

            if (verificarPalindromo(frase)) {
                alert("é um palíndromo!");
            } else {
                alert("não é um palíndromo!");
            }
        }
        verificar();
    });
}); 
