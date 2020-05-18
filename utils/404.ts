import { Middleware } from 'https://deno.land/x/oak/mod.ts'

const error404: Middleware = ({ response }) => {
  response.status = 404
	response.body = 'Error 404 - página não encontrada'
}

export default error404
