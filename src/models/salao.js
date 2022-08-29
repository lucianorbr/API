const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salao = new Schema({
  nome: {
    type: String,
    required: [true, 'O Nome é obrigatório']
  },
  foto: String,
  capa: String,
  email: {
    type: String,
    required: [true, 'O e-mail é obrigatório']
  },
  senha: {
    type: String,
    required: [true, 'A senha é obrigatório']
  },
  telefone: String,
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
  },
  geo: {
    tipo: String,
    coordenates: Array,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
})

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Salao', salao)