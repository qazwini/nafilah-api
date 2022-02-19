function getHijriDate() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let month = Intl.DateTimeFormat("en-u-ca-islamic-civil", {month: 'numeric'}).format(date);
    let day = Intl.DateTimeFormat("en-u-ca-islamic-civil", {day: 'numeric'}).format(date);
    return { month, day };
}

module.exports = { getHijriDate };
