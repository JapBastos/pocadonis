import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class DoctorsController {
  public async index({}: HttpContextContract) {
    const all = User.all()

    return all
  }

  public async store({ request }: HttpContextContract) {
    const { name, email, password } = request.body()

    const user = await User.create({
      name,
      email,
      password,
    })

    return user
  }

  public async show({ params }: HttpContextContract) {
    const user = User.findOrFail(params.id)

    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    const data = request.body()

    user.merge(data)

    await user.save()

    return user
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
