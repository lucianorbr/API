const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salaColaborador = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salao',
    required: true,
  },
  colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: true,
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: true,
    default: 'Ativo'
  },  
 dataCadastro: {
  type: Date,
  default: Date.now
 },
})


module.exports = mongoose.model('SalaColaborador', salaColaborador)