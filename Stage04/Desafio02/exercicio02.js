/**
 
Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno 
        obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

 */

let studentsList = [
  {
    nome: "Akama",
    firtTestNote: 7.4,
    secondTestNote: 9.2,
  },
  {
    nome: "Ronaldo",
    firtTestNote: 4.4,
    secondTestNote: 6.2,
  },
  {
    nome: "Thiago",
    firtTestNote: 5.4,
    secondTestNote: 6.8,
  },
  {
    nome: "Pocahonda",
    firtTestNote: 8.1,
    secondTestNote: 9.8,
  },
];

function averageTestNotes(studentsList) {
  for (const student of studentsList) {
    let averageStudent =
      (student.firtTestNote + student.secondTestNote) / 2;
    if (averageStudent >= 7) {
      alert(`O aluno ${student.nome} obteve sucesso para entrar no concurso:
        1ª nota ${student.firtTestNote} e 2ª nota ${student.secondTestNote}
        média ${averageStudent.toFixed(1)}`);
    } else {
      alert(`O aluno ${student.nome} falhou para entrar no concurso:
            1ª nota ${student.firtTestNote} e 2ª nota ${student.secondTestNote}
            média ${averageStudent.toFixed(1)}`);
    }
  }
}

averageTestNotes(studentsList);
