import express from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsControllers = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', upload.single('image'), pointsControllers.create)
routes.get('/points/:id', pointsControllers.show)
routes.get('/points', pointsControllers.index)

export default routes