import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.body()

    try {
      const token = await auth.use('api').attempt(email, password, { expiresIn: '30mins' })
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()

    response.status(200).send('Logout efetuado') /* .redirect('/') */
  }
}
