const express = require('express');
const prayersRoutes = require('./src/controllers/prayers');

require('dotenv').config()

const app = express();
app.use(express.json());

// Set up routes
app.use('/api/prayers/', prayersRoutes);

app.get('/api/meow/', (request, response) => {
    return response.send("nya~");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
