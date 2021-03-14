const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.createSubscription = async (req, res, next) => {
  try {
    const { customerId, priceId } = req.body;

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    res.status(201).json({ subscription });
  } catch (err) {
    res.status(500).json(err);
  }
};
