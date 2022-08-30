const { MongoClient } = require('mongodb');

class MyConnect extends MongoClient {

  constructor(url, options) {
    super(url, options);
    this.client = null;

    this.on('insert-value', this.insertValue)
  }

async insertValue(data) {
    try {
       this.client = await this.connect()

       const collection = this.client.db('testando').collection('olhaai');
       const response = await collection.insertOne(data);

       console.log(response);
       this.client.close();
     } catch (error) {
        console.log(error);
     }
  }
}

(new MyConnect(
  'mongodb+srv://admin:jWa7sIsO0e1OLJP3@clusterdev.cf6wx1h.mongodb.net/test', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
).emit('insert-value', { ola: 'fion', tudo: 'bom'});