// Crianção do cadastro do aluno1, sendo um objeto {} com campos nome,
//idade, cursando, presença e ra
let aluno1 = {
    nome: "Alessandra Cristina", 
    idade: 17,
    cursando: ["POO", "AOS", "IHC", "TIA", "PDM"],
    presença: ["2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14"],
    ra: "23102310",
}



// Criação da função para validar o cadastro do aluno
function validaCadastro(){
    // Validação para ver se o nome do aluno está válido (precisa ser maior que 10)
    if(aluno1.nome.length < 10){
        console.log("Nome inválido") // Exibe mensagem de erro
        return
    }

    // Validação para ver se a idade do aluno está válido (precisa ser maior que 14)
    if(aluno1.idade < 14){
        console.log("Idade inválida") // Exibe mensagem de erro
        return
    }

    // Validação para ver se a quantidade de matérias é suficiente (precisa ser mais que 3)
    if(aluno1.cursando <3){
        console.log("Quantidade de matéria insuficiente") // Exibe mensagem de erro
        return
    }

    // Validação para ver se a quantidade de presença é suficiente (precisa ser mais que 2)
    if(aluno1.presença <2){
        console.log("Presença inválidas") // Exibe mensagem de erro
        return
    }

    // Validação para ver se o RA está válido (precisa ser maior que 7)
    if(aluno1.ra.length <7){
        console.log("RA inválido") // Exibe mensagem de erro
        return
    }

    // Retorna a resposta para exibir o no console o objeto inteiro caso o cadastro esteja correto
    return[
        console.log(aluno1)
    ]
}

validaCadastro()

// Crianção do cadastro do aluno1, sendo um objeto {} com campos nome,
//idade, cursando, presença e ra

let aluno2 = {
    nome: "Alessandra Cristina", 
    idade: 11,
    cursando: ["POO", "AOS", "IHC", "TIA", "PDM"],
    presença: ["2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14"],
    ra: "23102310",
}

function validaCadastro2(){
    // Validação para ver se o nome do aluno está válido (precisa ser maior que 10)
    if(aluno2.nome.length < 10){
        console.log("Nome inválido") // Exibe mensagem de erro
        return
    }

    // Validação para ver se a idade do aluno está válido (precisa ser maior que 14)
    if(aluno2.idade < 14){
        console.log("Idade inválida") // Exibe mensagem de erro
        return
    }

    // Validação para ver se a quantidade de matérias é suficiente (precisa ser mais que 3)
    if(aluno2.cursando <3){
        console.log("Quantidade de matéria insuficiente") // Exibe mensagem de erro
        return
    }

    // Validação para ver se a quantidade de presença é suficiente (precisa ser mais que 2)
    if(aluno2.presença <2){
        console.log("Presença inválidas") // Exibe mensagem de erro
        return
    }

    // Validação para ver se o RA está válido (precisa ser maior que 7)
    if(aluno2.ra.length <7){
        console.log("RA inválido") // Exibe mensagem de erro
        return
    }

    // Retorna a resposta para exibir o no console o objeto inteiro caso o cadastro esteja correto
    return[
        console.log(aluno2)
    ]
}

validaCadastro2()




