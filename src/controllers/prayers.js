const nafilahs = require('../services/nafilahs');
const router = require('express').Router();

// Return prayers for tonight
router.get('/', (request, response) => {
    const prayer = nafilahs.getTonightPrayers();
    return response.json({
        ...prayer,
        url: request.baseUrl + request.path,
    });
});

// Return prayers for hijri date
router.get('/:month/:day/', (request, response) => {
    const month = Number(request.params.month);
    const day = Number(request.params.day);
    const prayer = nafilahs.getPrayersForDate(month, day);
    return response.json({
        ...prayer,
        url: request.baseUrl + request.path,
    });
});

module.exports = router;
