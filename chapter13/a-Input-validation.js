const Joi = require('joi');

app.post('/stock', async (req, res, next) => {

    const { body } = req; const
        stockSchema = Joi.object().keys({
            symbol: Joi.string().required,
            price: Joi.string().required(),
        });
    const result = Joi.validate(body, stockSchema);

    const { value, error } = result;

    const valid = error == null;

    if (!valid) {
        res.status(422).json({
            message: 'Invalid request',
            data: body
        })
    } else {
        // implement create stock logic
        const data = { symbol: value.symbol, price: value.price };
        const createdStock = await api.createdStock(data);
        res.json({ message: 'Resource created', data: createdPost })
    }
});