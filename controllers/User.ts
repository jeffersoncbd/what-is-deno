import { RouterMiddleware,  } from 'https://deno.land/x/oak/mod.ts'

import { UserModel } from '../index.ts'

class UserController {
  show: RouterMiddleware = ({ request, response }) => {
    response.body = UserModel.findAll()
  }

  create: RouterMiddleware = async ({ request, response }) => {
    if (!request.hasBody) {
      response.status = 400
      response.body = 'Informe os dados do usuário'
      return
    }

    // a linha a baixo pode gerar um erro no typescript, mas está correto com a documentação
    const { value: { name, age, email } } = await request.body()

    if (!name || !age) {
      response.status = 400
      response.body = 'nome e idade são obrigatórios'
    }

    const user = UserModel.create({ name, age, email })

    response.body = user
  }

  read: RouterMiddleware = ({ response, params }) => {
    const user = UserModel.findOne(Number(params.id))

    if (user === null) {
      response.status = 400
      response.body = 'Usuário não cadastrado'
      return
    }

    response.body = user
  }

  update: RouterMiddleware = async ({ request, response, params }) => {
    const user = UserModel.findOne(Number(params.id))

    if (user === null) {
      response.status = 400
      response.body = 'Usuário não cadastrado'
      return
    }

    if (!request.hasBody) {
      response.status = 400
      response.body = 'Informe os dados do usuário'
      return
    }

    // a linha a baixo pode gerar um erro no typescript, mas está correto com a documentação
    const { value: { name, age, email } } = await request.body()

    if (!name || !age) {
      response.status = 400
      response.body = 'nome e idade são obrigatórios'
    }

    const newUser = UserModel.update(user.id, { name, age, email })

    response.body = newUser
  }

  delete: RouterMiddleware = ({ response, params }) => {
    const user = UserModel.findOne(Number(params.id))

    if (user === null) {
      response.status = 400
      response.body = 'Usuário não cadastrado'
      return
    }

    UserModel.delete(user.id)

    response.body = 'Usuário excluido com sucesso'
  }
}

export default new UserController()
