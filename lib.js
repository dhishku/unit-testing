const db = require('./db');
const mail = require('./mail');


module.exports.getProduct = function(productId) { 
  return { id: productId, price: 10 };
}

module.exports.registerUser = function(username) { 
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username: username }
}

// order = {customerId: string, totalPrice: number, email:}
module.exports.applyDiscount = function(order) { 
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) 
    order.totalPrice *= 0.9; 
}

// order = {customerId: string, totalPrice: number, email: }
module.exports.notifyCustomer = async function(order) { 
  const customer = await db.getCustomer(order.customerId);

  mail.send(customer.email, 'Your order was placed successfully.');
}