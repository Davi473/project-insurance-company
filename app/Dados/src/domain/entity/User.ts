import bcrypt from "bcrypt";
import Email from "../vo/Email";

export default class User {
	private id: string;
	private name: string;
	private email: Email;
	private hash: string;

	constructor (
		id: string,
		name: string, 
		email: string,
		hash: string	
	) {
		this.id = id;
		this.name = name;
		this.email = new Email(email);
		this.hash = hash;
	}

	public static async create (
		name: string,
		email: string,
		senha: string,
	): Promise<User> {
		const id = crypto.randomUUID();
		const saltRounds = Math.random();
		const hash = await bcrypt.hash(senha, saltRounds);
		return new User(id, name, email, hash);
	}

	public getId(): string {
		return this.id;
	}

	public getEmail(): string {
		return this.email.getValue();
	}

	public getName(): string {
		return this.name;
	}

	public async validatePassword(senha: string): Promise<boolean> {
		return await bcrypt.compare(senha, this.hash);
	}
}

