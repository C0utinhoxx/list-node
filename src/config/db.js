const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log('URI do MongoDB:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, 
  socketTimeoutMS: 30000,
})
.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));
