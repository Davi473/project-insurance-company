import User from "../../domain/entity/User";

export default interface UserRepository {
    save (user: User): Promise<void>;
    findByEmail (email: string): Promise<User>;
    findById (id: string): Promise<User>;
    findAll (): Promise<User[]>;
    delete (id: string): Promise<void>;
}

export class UserRepositoryMemmory implements UserRepository {
    private users: User[] = [];
    
    constructor() {}

    public async save(user: User): Promise<void> {
        this.users.push(user);
    }

    public async findByEmail(email: string): Promise<User> {
        const [output] = this.users.filter(user => user.getEmail() === email);
        return output;
    }

    public async findById(id: string): Promise<User> {
        const [output] = this.users.filter(user => user.getId() === id);
        return output;
    }

    public async findAll(): Promise<User[]> {
        return this.users;
    }

    public async delete(id: string): Promise<void> {
        const index = this.users.findIndex(item => item.getId() === id);
        if (index !== -1) throw new Error("Usuario não existe");
        this.users.splice(index, 1);
    }
}