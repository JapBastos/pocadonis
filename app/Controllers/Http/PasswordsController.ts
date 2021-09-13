import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class PasswordsController {
  public async reset({ auth, request, response }: HttpContextContract) {
    const { password } = request.body()

    if (await auth.use('api').check()) {
      if (auth.user) {
        const user = await User.findOrFail(auth.user.id)

        user.merge(password)

        await user.save()

        return response.status(200).send({ message: 'Senha alterada com sucesso.' })
      }
    }

    return response.status(404).send({ message: 'Usuário não encontrado.' })
  }

  public async resend({}: HttpContextContract) {}
}
