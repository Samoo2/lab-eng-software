document.addEventListener("DOMContentLoaded", () => {

    let meusDados = []; // fora do evento de clique
  
    document.getElementById("meuBotao").addEventListener("click", () => {
  
      let dado = document.getElementById("dado").value;
  
      meusDados.push(dado); 
      meusDados.sort();
  
      let lista = document.getElementById("lista");
      lista.innerHTML = "";
  
      for (let i = 0; i < meusDados.length; i++) {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(meusDados[i]));
        lista.appendChild(item);
      }
    }); 
  });
  