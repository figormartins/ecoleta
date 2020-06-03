import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsControllers = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsControllers.create)
routes.get('/points/:id', pointsControllers.show)
routes.get('/points', pointsControllers.index)

export default routes