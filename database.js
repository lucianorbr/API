const mongoose = require('mongoose');
const URI = 
'mongodb+srv://gobarber_admin:KeH3yQIQKCmt0Isy@cluster0.8f3vz.gcp.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



mongoose
  .connect(URI)
  .then(() => console.log('DB in Up'))
  .catch(() => console.log(err))