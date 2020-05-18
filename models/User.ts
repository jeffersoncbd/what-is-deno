export interface User {
  name: string
  age: number
  email?: string
}

class UserModel {
  private users: User[]

  constructor() {
    this.users = []
  }

  findAll = () => {
    return this.users.map((user, i) => {
      return { ...user, id: i + 1 }
    })
  }

  findOne = (id: number) => {
    const user = this.users.find((user , i) => (i + 1) === id)
    return user ? { ...user, id } : null
  }

  create = (user: User) => {
    this.users.push(user)
    return { ...user, id: this.users.length }
  }

  update = (id: number, newUser: User) => {
    this.users = this.users.map((user, i) => {
      if ((i + 1) === id) {
        return newUser
      }
      return user
    })
    return { ...newUser, id }
  }

  delete = (id: number) => {
    this.users.splice(id - 1, 1)
  }
}

export default UserModel
