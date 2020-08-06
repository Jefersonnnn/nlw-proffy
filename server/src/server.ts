import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {name: 'Jeferson', age: 26},
        {name: 'Felipe', age: 26},
        {name: 'Douglinha', age: 23}
    ];

    return response.json(users)
});

// localhost:3333
app.listen(3333);