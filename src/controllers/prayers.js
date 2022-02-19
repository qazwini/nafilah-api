const nafilahs = require('../services/nafilahs');
const router = require('express').Router();

// Return prayers for tonight
router.get('/', (request, response) => {
    const data = nafilahs.getTonightPrayers();

    if (!data.length) {
        return response.send("no prayers for today :(\ncome back in rajab");
    }

    return response.json({
        prayers: data,
        url: request.baseUrl + request.path,
    });
});

// Return prayers for hijri date
router.get('/:month/:day/', (request, response) => {
    const month = Number(request.params.month);
    const day = Number(request.params.day);
    const data = nafilahs.getPrayersForDate(month, day);

    if (!data.length) {
        return response.status(404).send({ error: "resource not found" });
    }

    return response.json({
        prayers: data,
        url: request.baseUrl + request.path,
    });
});

// Return prayer with id
router.get('/:id/', (request, response) => {
    const id = request.params.id;
    const prayer = nafilahs.getPrayerWithId(id);

    if (!prayer) {
        return response.status(404).send({ error: "resource not found" });
    }

    return response.json({
        ...prayer,
        url: request.baseUrl + request.path,
    });
});

module.exports = router;
