const router = require('express').Router();
const {
  listCustomers,
  createCustomer,
  removeCustomers,
} = require('../controllers/customers');
const { listProducts, createProduct } = require('../controllers/products');
const { listPrices, createPrice } = require('../controllers/prices');
const {
  createPaymentMethod,
  attachPaymentMethod,
} = require('../controllers/payment-methods');
const { createSubscription } = require('../controllers/subscriptions');

router
  .route('/customers')
  .get(listCustomers)
  .post(createCustomer)
  .delete(removeCustomers);
router.route('/products').get(listProducts).post(createProduct);
router.route('/prices').get(listPrices).post(createPrice);
router.route('/payment-methods').post(createPaymentMethod);
router.route('/payment-methods/:paymentId').post(attachPaymentMethod);
router.route('/subscriptions').post(createSubscription);

module.exports = router;
