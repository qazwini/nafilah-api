const router = require('express').Router();

exp = {
    name: "Rajab Night 1 Prayer",
    date: "7-1",
    text: "#Rajab Night 1 Prayer\nhello folks",
}

router.get('/', (request, response) => {
    return response.json(exp);
});

module.exports = router;
