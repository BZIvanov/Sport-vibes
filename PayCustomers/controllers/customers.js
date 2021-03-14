const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.listCustomers = async (req, res, next) => {
  try {
    const customers = await stripe.customers.list({
      limit: 100,
    });

    res.status(200).json({ customers });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.createCustomer = async (req, res, next) => {
  try {
    const { email, description } = req.body;
    const customer = await stripe.customers.create({
      email,
      description,
    });

    res.status(201).json({ customer });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.removeCustomers = async (req, res, next) => {
  try {
    const { id } = req.body;
    const customer = await stripe.customers.del(id);

    res.status(200).json({ customer });
  } catch (err) {
    res.status(500).json(err);
  }
};
