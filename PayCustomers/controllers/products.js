const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.listProducts = async (req, res, next) => {
  try {
    const products = await stripe.products.list({
      limit: 100,
    });

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const product = await stripe.products.create({
      name,
    });

    res.status(201).json({ product });
  } catch (err) {
    res.status(500).json(err);
  }
};
