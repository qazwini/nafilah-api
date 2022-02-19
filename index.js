const express = require('express');
const prayersRoutes = require('./src/controllers/prayers');

const app = express();
app.use(express.json());

// Set up routes
app.use('/api/prayers/', prayersRoutes);

app.get('/api/notes/', (request, response) => {
    return response.json([{meow: 1}]);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
