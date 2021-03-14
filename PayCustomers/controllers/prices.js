const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.listPrices = async (req, res, next) => {
  try {
    const prices = await stripe.prices.list({
      limit: 100,
    });

    res.status(200).json({ prices });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.createPrice = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const price = await stripe.prices.create({
      unit_amount: 2000,
      currency: 'bgn',
      recurring: { interval: 'month' },
      product: productId,
    });

    res.status(201).json({ price });
  } catch (err) {
    res.status(500).json(err);
  }
};
