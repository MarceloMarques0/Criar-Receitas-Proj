 function adicionar(){
     var receitname = document.getElementById('namerect')
     var quantid = document.getElementById('quanti')
     var medid = document.getElementById('medid')
     var ingredien = document.getElementById('ingredient')
     var name = document.getElementById('res')

     var recname = String(receitname.value)
     var medida = String(medid.value)
     var ingrediente = String(ingredien.value)
     var quantidade = Number(quantid.value)
     
     if(recname.length == 0 || medida.length == 0 || ingrediente.length == 0 || quantidade == 0){
       alert('[ERRO] Preencha todos os campos')

     }else{
       var list = `${quantidade} ${medida} de ${ingrediente}`
      var lista = document.getElementById("lista")
      var li = document.createElement("li")
      name.innerHTML = `<h1>Receita de: ${recname}</h1>`
      li.textContent = list
      lista.appendChild(li)
      quantid.value = ""
      medid.value = ""
      ingredien.value = ""
     }
     
 }