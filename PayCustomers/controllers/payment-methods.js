const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.createPaymentMethod = async (req, res, next) => {
  try {
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 3,
        exp_year: 2022,
        cvc: '314',
      },
    });

    res.status(201).json({ paymentMethod });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.attachPaymentMethod = async (req, res, next) => {
  try {
    const { paymentId } = req.params;
    const { customerId } = req.body;

    const attached = await stripe.paymentMethods.attach(paymentId, {
      customer: customerId,
    });

    res.status(200).json({ attached });
  } catch (err) {
    res.status(500).json(err);
  }
};
