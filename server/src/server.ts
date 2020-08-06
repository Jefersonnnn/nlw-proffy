import express from 'express';

const app = express();

app.use(express.json());


// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar (/:id)
// Query Params: Paginação, filtros, ordenação (request.query) (/users?)
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

// localhost:3333
app.listen(3333);