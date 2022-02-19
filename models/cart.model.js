class Cart {
  constructor(items = [], totalQuantity = 0, totalPrice = 0) {
    this.items = items;
    this.totalQuantity = totalQuantity;
    this.totalPrice = totalPrice;
  }

  addItem(product) {
    const cartItem = {
      product: product,
      quantity: 1,
      totalPrice: product.price,
    };

    console.log(1, cartItem);
    console.log(2, this.items);

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      console.log(3, item);
      if (item.product.id === product.id) {
        cartItem.quantity = item.quantity + 1;
        cartItem.totalPrice += product.price;
        this.items[i] = cartItem;
        console.log(4, cartItem);

        this.totalQuantity++;
        this.totalPrice += product.price;
        console.log(5, this.totalQuantity);
        console.log(6, this.totalPrice);
        return;
      }
    }
    console.log(7, cartItem);
    this.items.push(cartItem);
    this.totalQuantity++;
    this.totalPrice += product.price;
    console.log(8, this.totalQuantity);
    console.log(9, this.totalPrice);
  }

  updateItem(productId, newQuantity) {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.product.id === productId && newQuantity > 0) {
        const cartItem = { ...item };
        const quantityChange = newQuantity - item.quantity;
        cartItem.quantity = newQuantity;
        cartItem.totalPrice = newQuantity * item.product.price;
        this.items[i] = cartItem;

        this.totalQuantity += quantityChange;
        this.totalPrice += quantityChange * item.product.price;
        return { updatedItemPrice: cartItem.totalPrice };
      } else if (item.product.id === productId && newQuantity <= 0) {
        this.items.splice(i, 1);
        this.totalQuantity += item.quantity;
        this.totalPrice -= item.totalPrice;
        return { updatedItemPrice: 0 };
      }
    }
  }
}

module.exports = Cart;
