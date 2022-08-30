const mongoose = require('mongoose');

global.db = mongoose.connect(
  'mongodb+srv://admin:7k81PfYwj73TS5aY@clusterdev.cf6wx1h.mongodb.net/test'
  );

mongoose.connection.on('connected', function () {
 console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
 console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('=====Conexão finalizada=====');
}); 