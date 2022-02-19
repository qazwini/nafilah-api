const hijri = require('../utils/hijri');
const router = require('express').Router();

// Return prayers for tonight
router.get('/', (request, response) => {
    const { month, day } = hijri.getHijriDate(); 

    let exp = {
        name: "Rajab Night 1 Prayer",
        date: `${month}-${day}`,
        text: "#hello folks",
        url: request.baseUrl + request.path,
    }
    return response.json(exp);
});

// Return prayers for hijri date
router.get('/:month/:day/', (request, response) => {
    const month = Number(request.params.month);
    const day = Number(request.params.day);
    return response.send(`prayer for ${month}-${day}`);
});

module.exports = router;
