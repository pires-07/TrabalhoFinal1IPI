// array ou [] serve para armazenar diferentes valores dentro da variavel
var lista = []


// while serve para criar um loop , e o true é para em quanto for verdadeiro rodar o codigo
while(true){

// chaves ou {} serve para mostrar o que é de cada codigo, ``serve para deixar mais organizado o texto

var nome=prompt(`1 - Adicionar

2 - Editar 

3 - Excluir

4 - Vizualizar

5 - Sair`)

//if serve para mostra decisão
if(nome == "1"){

adicionar()

//else serve para caso não seja if seja else , if = se, else = se não 
}else if(nome == "2"){

editar()
}else if(nome == "3"){

// () serve para indicar que é uma função
excluir() 
}else if(nome =="4"){

visualizar()
}else if(nome == "5"){

//break serve para quebrar o while
break;

}else{

}

}


function adicionar(){
    var produto = {
        
        nome:prompt("Digite o nome do produto:"),
        marca: prompt("Digite a marca do produto:"),
        preco:prompt("Digite o preco do produto:")
    }
    // o sifrão ou $ serve colocar uma var dentro do texto
    var texto = `Nome: ${produto.nome}
    \n Marca: ${produto.marca}
    \n Preço: ${produto.preco}`;
    lista.push(texto);
    alert("Produto Adicionado!");

}
function editar(){
var edit = prompt("edite o produto desejado")
var produto = {
        
    nome:prompt("Digite o nome do produto:"),
    marca: prompt("Digite a marca do produto:"),
    preco:prompt("Digite o preco do produto:")
}
// o sifrão ou $ serve colocar uma var dentro do texto
var texto = `Nome: ${produto.nome}
\n Marca: ${produto.marca}
\n Preço: ${produto.preco}`;
lista[edit]=texto
} 

function visualizar(){
    //join serve para listar
    alert(lista.join("\n"))
}

function excluir(){
    var edit = prompt("edite o produto desejado")
    //splice serve para remover ,edit é o indice que ele deseja remover e o 1 é a quantidade que ele dejesa remover
    lista.splice(edit,1);
}