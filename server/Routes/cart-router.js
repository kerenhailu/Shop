const cartRouter = require('express').Router();
const cartActions = require('../Controllers/cart-controller');

cartRouter.get('/', cartActions.getAllCart);
cartRouter.get('/:id', cartActions.getCartById);
cartRouter.post('/', cartActions.postCart);
cartRouter.put('/:id',cartActions.putCart);
cartRouter.delete('/:id',cartActions.deleteCart);

module.exports = cartRouter;