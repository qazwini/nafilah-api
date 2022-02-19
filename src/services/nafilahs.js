const db = require('./db');
const hijri = require('./hijri');

function getPrayersForDate(month, day) {
    const dateStr = `${month}-${day}-e`;
    const prayers = db.query("SELECT * FROM nafilahs WHERE rdate = ?", [dateStr]);
    return { prayers };
}

function getTonightPrayers() {
    const { month, day } = hijri.getHijriDate(1); 
    return getPrayersForDate(month, day);
}

module.exports = { getPrayersForDate, getTonightPrayers };
