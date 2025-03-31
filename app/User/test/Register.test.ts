import Register from "../src/application/usecase/user/Register";
import { UserRepositoryMemmory } from "../src/infra/repository/UserRepository";

const repository = new UserRepositoryMemmory();
const registerUseCase = new Register(repository);

test("Erro de usuario ja existe", async () => {
    const user = {
        name: "test",
        email: `${Math.random()}@gmail.com`,
        password: "123"
    }
    await registerUseCase.execute(user); 
    await expect(registerUseCase.execute(user)).rejects.toThrow("User already exists");
});

test("Email invalido", async () => {
    const user = {
        name: "test",
        email: "qweqweqweqweqwe",
        password: "123",
    };
    await expect(registerUseCase.execute(user)).rejects.toThrow("Invalid email");
});