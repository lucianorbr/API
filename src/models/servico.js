const mongoose = require('mongoose')
const Schema = mongoose.Schema

const servico = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salao',
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  duracao: {
    type: number,
    required: true,
    default: ['50 minutos'],
  },
  descricaoServico: {
    type: String,
    required: true,
    enum: ['Cabelo', 'Barba', 'Pezinho', 'Cabelo e Barba', 'Raspagem na Gillete'],
    default: ['Cabelo e Barba']
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Servico', servico)