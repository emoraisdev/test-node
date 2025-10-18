const _ = require('lodash')

const alunos = [
    {
        nome: 'Joao',
        nota: 7.6
    },
    {
        nome: 'Joao',
        nota: 1.6
    },
    {
        nome: 'Joao',
        nota: 2.4
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)