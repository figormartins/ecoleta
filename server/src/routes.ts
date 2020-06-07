import express from 'express'
import { celebrate, Joi } from 'celebrate'

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsControllers = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    })
  }),
  pointsControllers.create
)
routes.get('/points/:id', pointsControllers.show)
routes.get('/points', pointsControllers.index)

export default routes