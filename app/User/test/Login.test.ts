import Login from "../src/application/usecase/user/Login";
import Register from "../src/application/usecase/user/Register";
import { UserRepositoryMemmory } from "../src/infra/repository/UserRepository";


const repository = new UserRepositoryMemmory();
const loginUseCase = new Login(repository);
const registerUseCase = new Register(repository);

test("Erro de usuario não existe", async () => {
    const user = {
        email: `${Math.random()}@gmail.com`,
        password: "1234"
    };
    await expect(loginUseCase.execute(user)).rejects.toThrow("User already exists");
});

test("Senha invalida", async () => {
    const user = {
        email: `${Math.random()}@gmail.com`,
        password: "1234"
    };
    await registerUseCase.execute({ ...user, name: "test"});
    await expect(loginUseCase.execute({ ...user, password: "321"})).rejects.toThrow("Incorrect password");
});
