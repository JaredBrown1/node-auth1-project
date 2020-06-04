module.exports = (req, res, next) => {
  if (res.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "not logged in" });
  }
};
