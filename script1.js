document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("meuBotao").addEventListener("click", ()=>{

        let hoje = new Date();
        let dia = hoje.getDay();
        let dd = hoje.getDate();
        let mm = hoje.getMonth()+1; 
        let yyyy = hoje.getFullYear(); 

        switch(dia){
            case 0:
                dia ="Domingo";
                break;
            case 1:
                dia ="Segunda Feira";
                break; 
            case 3:
                dia="Quarta Feira";
                break;
            case 4:
                dia="Quinta Feira";
                break;
            case 5:
                dia="Sexta Feira"; 
                break;
            case 6:
                dia="Sabado";
                break;
        }
        switch(mm){
            case 1:
                mm="Janeiro";
                break;
            case 2:
                mm="Fevereiro";
                break;
            case 3:
                mm="Março";
                break;
            case 4:
                mm="Abril";
                break;
            case 5:
                mm="Maio";
                break;
            case 6:
                mm="Junho";
                break;
            case 7:
                mm="Julho";
                break;
            case 8:
                mm="Agosto";
                break;
            case 9:
                mm="Setembro";
                break;
            case 10:
                mm="Outubro";
                break;
            case 11:
                mm="Novembro";
                break;
            case 12:
                mm="Dezembro";
                break; 

        }
        today = dia+", "+dd+" de "+mm+" de "+yyyy; 
        document.write(today);
    });
});
