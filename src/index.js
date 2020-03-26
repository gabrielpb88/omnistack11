const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (request, response) => {
  response.send('Pagina Inicial');
});

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
