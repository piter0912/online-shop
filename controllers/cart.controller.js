function addCartItem(req, res) {
  res.locals.cart.addCartItem();
}

module.exports = {
  addCartItem: addCartItem,
};
