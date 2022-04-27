const clothingRouter = require('express').Router();
const clothingActions = require('../Controllers/clothing-controller');

clothingRouter.get('/', clothingActions.getAllClothing);
clothingRouter.get('/:id', clothingActions.getClothingById);
clothingRouter.post('/', clothingActions.postClothing);
clothingRouter.put('/:id',clothingActions.putClothing);
clothingRouter.delete('/:id',clothingActions.deleteClothing);

module.exports = clothingRouter;