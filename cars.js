document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("meuBotao").addEventListener("click", () => {
        function Carros() {
            let marca;
            let modelo;
            let cor;
            let kmetragem;
            let ano;
            let valor_fipe;

            //tratamento do ano
            this.setAno = function (vAno) {
                this.ano = vAno;
            }
            this.getAno = function () {
                return this.ano;
            }

            //tratamento da kilometragem
            this.setKmetragem = function (vKmetragem) {
                this.kmetragem = vKmetragem;
            }
            this.getKmetragem = function () {
                return this.kmetragem;
            }

            //tratamento do valor fipe
            this.setValor_fipe = function (vValor_fipe) {
                this.valor_fipe = vValor_fipe;
            }
            this.getValor_fipe = function () {
                return this.valor_fipe;
            }

            this.anosUtilizacao = function () {
                let dataAtual = new Date();
                let yyyy = dataAtual.getFullYear();
                let utilizacao = yyyy - this.ano;
                return utilizacao;
            }
            this.valorMercado = function () {
                let valor;
                switch (true) {
                    case (this.kmetragem <= 30000):
                        valor = 1.1 * this.valor_fipe;
                        break;
                    case (this.kmetragem <= 50000):
                        valor = this.valor_fipe;
                        break;
                    default:
                        valor = 0.9 * this.valor_fipe;
                }
                return valor;
            }
        }

        function Calcular() {
            let c1 = new Carros();

            // Obtendo valores do formulário
            let marca = document.getElementById("marca").value;
            let modelo = document.getElementById("modelo").value;
            let cor = document.getElementById("cor").value;
            let ano = document.getElementById("ano").value;
            let km = document.getElementById("kmetragem").value;
            let valor_fipe = document.getElementById("valor_fipe").value;

            // Atribuindo valores ao objeto
            c1.setAno(ano);
            c1.setKmetragem(km);
            c1.setValor_fipe(valor_fipe);

            // Chamando os métodos e atribuindo os valores a variáveis
            let utilizacao = c1.anosUtilizacao();
            let valor_mercado = c1.valorMercado();

            // Exibindo os valores na página
            document.getElementById("marca2").innerHTML = marca;
            document.getElementById("modelo2").innerHTML = modelo;
            document.getElementById("cor2").innerHTML = cor;
            document.getElementById("ano2").innerHTML = ano;
            document.getElementById("utilizacao").innerHTML = utilizacao;
            document.getElementById("valor_mercado").innerHTML = valor_mercado;
        }
        Calcular();
    });
});
