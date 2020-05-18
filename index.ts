import { Application } from 'https://deno.land/x/oak/mod.ts'
import errorHandler from './utils/errorHandler.ts'
import router from './routes.ts'
import error404 from './utils/404.ts'
import env from './config.ts'

const app = new Application()

import UserModelClass from './models/User.ts'
export const UserModel = new UserModelClass()

app.use(errorHandler)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(error404)

const host = env.get('APP_HOST')
const port = env.get('APP_PORT')

console.log(`Listening on port:${port}...`)

app.listen(`${host}:${port}`)

// https://github.com/diogosouza/logrocket_deno_api
