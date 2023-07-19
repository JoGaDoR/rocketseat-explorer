/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patientsList = [
    {
        nome: "Luiz",
        idade: 20,
        peso: 80,
        altura: 1.80
    },
    {
        nome: "Alex",
        idade: 25,
        peso: 88,
        altura: 1.90
    },
    {
        nome: "Akame",
        idade: 18,
        peso: 65,
        altura: 1.68
    },

]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)