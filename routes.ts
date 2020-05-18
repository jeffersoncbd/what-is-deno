import { Router } from 'https://deno.land/x/oak/mod.ts'

import UserController from './controllers/User.ts'

const router = new Router()

router
  .get('/users', UserController.show)
  .get("/users/:id", UserController.read)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)

export default router
