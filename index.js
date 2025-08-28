const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json());
app.use('/', require('./routes/urls'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});