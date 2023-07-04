const app = require('express')();
const getCountry = require("./api/get");

app.get('/', async (req, res) => {
    const country = await getCountry.get();
    res.json(country);
});

app.listen(8080, function () {
    console.log('Hey');
})
