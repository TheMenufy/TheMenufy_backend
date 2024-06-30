const app = require('express').Router();
const _ = require('../../controllers/sprint2/stripe.controller');

app.post('/stripe/:userId', _.stripe);
app.post('/refund/:userId', _.refund);
app.post('/tips/:userId/:amountTips', _.stripeTipsPayment);

module.exports = app;