function getHijriDate(adj = 0) {
    let date = new Date();
    date.setDate(date.getDate() + adj);
    let month = Intl.DateTimeFormat("en-u-ca-islamic-civil", {month: 'numeric'}).format(date);
    let day = Intl.DateTimeFormat("en-u-ca-islamic-civil", {day: 'numeric'}).format(date);
    return { month, day };
}

module.exports = { getHijriDate };
