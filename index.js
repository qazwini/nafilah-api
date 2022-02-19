const express = require('express');
const prayersRoutes = require('./src/controllers/prayers');

require('dotenv').config()

const app = express();
app.use(express.json());

// Display routes
app.get('/', (request, response) => {
    let routes = {
        prayers: "/prayers/",
        url: request.baseUrl + request.path,
    };
    return response.json(routes);
});

// Set up routes
app.use('/prayers/', prayersRoutes);

app.get('/meow/', (request, response) => {
    return response.send("nya~");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
