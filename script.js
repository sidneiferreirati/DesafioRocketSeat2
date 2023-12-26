// let estudantes = [
//     {
//         nome:'Leticia',
//         nota1:7.5,
//         nota2:5
//     },
//     {
//         nome:'João',
//         nota1:6,
//         nota2:9
//     },
//     {
//         nome:'Carlos',
//         nota1:8,
//         nota2:6
//     },
//     {
//         nome:'Fernanda',
//         nota1:7.5,
//         nota2:10
//     }
// ]

let estudantes = []

let qtdEstudantes = Number(prompt('Quantos estudantes você quer adicionar? '))

for (let index = 0; index < qtdEstudantes; index++) {
    estudantes[index] = {
        nome:prompt('Digite o nome do aluno'),
        nota1:Number(prompt('Digite a nota 1')),
        nota2:Number(prompt("Digite a nota2"))
    }
    
}


function calcularMedia(nota1,nota2){
    return (nota1 + nota2) / 2
}

const isAproved = (list)=>{
    for (const aluno of list) {
        let media = calcularMedia(aluno.nota1,aluno.nota2)
        if(media >= 7){
            alert(`
            A média do(a) aluno(a) ${aluno.nome} é: ${media} 
            Parabéns você foi aprovado no concurso
            `)
        }else{
            alert(`
            A média do ${aluno.nome} é: ${media} 
            Não foi dessa vez. Continue Tentando 
            `
            )
        }
    }
    
}

isAproved(estudantes)