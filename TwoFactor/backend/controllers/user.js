const speakeasy = require('speakeasy');
const User = require('../db/models/user');

exports.getAll = async (req, res) => {
  try {
    const users = await User.query();

    res.status(201).json({ users });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.register = async (req, res) => {
  try {
    const { username } = req.body;
    const secret = speakeasy.generateSecret({
      name: 'MyAwesomeApp',
    });

    const user = await User.query().insert({
      username,
      auth_secret: secret.base32,
      otpauth_url: secret.otpauth_url,
    });

    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.verify = async (req, res) => {
  try {
    const { userId, token } = req.body;
    const user = await User.query().findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Not found' });
    }

    const verified = speakeasy.totp.verify({
      secret: user.auth_secret,
      encoding: 'base32',
      token,
    });

    if (!verified) {
      return res.status(200).json({ verified: false });
    }

    const isoDate = new Date(Date.now()).toISOString();
    await user.$query().patch({ last_used: isoDate });

    res.status(200).json({ verified: true });
  } catch (err) {
    res.status(500).json(err);
  }
};
