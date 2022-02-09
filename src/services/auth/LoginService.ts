import { ILoginDTO, LoginDTO, LoginModel } from './model'

export class LoginService {
  static create = async (loginData: LoginDTO): Promise<ILoginDTO> => {
    const loginModel = new LoginModel({
      username: loginData.username,
      password: loginData.password,
    })

    const login = await loginModel.save()

    return LoginDTO.fromModel(login)
  }
}

export default LoginService
