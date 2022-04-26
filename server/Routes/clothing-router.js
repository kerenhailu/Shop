const clothingRouter = require('express').Router();
const clothingActions = require('../Controllers/clothing-controller');

clothingRouter.post('/', clothingActions.getAllClothing);
clothingRouter.post('/:id', clothingActions.getClothingById);
clothingRouter.get('/', clothingActions.postClothing);
clothingRouter.put('/:id',clothingActions.putClothing);
clothingRouter.put('/:id',clothingActions.deleteClothing);

module.exports = clothingRouter;