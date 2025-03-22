import bcrypt from "bcrypt";

export default class User {
	private name: string;
	private email: string;
	private hash: string;

    	constructor (
 		name: string, 
		email: string,
		hash: string	
    	) {
        	this.name = name;
		this.email = email;
		this.hash = hash;
    	}

	public async static create (
		name: string,
		email: string,
		senha: string,
	): Promise<User> {
		const saltRounds = Math.random();
		const hash = bcrypt.hash(senha, saltRounds);
		return new User(name, email, hash);
	}

	public getName(): string {
		return this.name;
	}

	public async validatePassword(senha: string): Promise<boolean> {
		return await bcrypt.compare(senha, this.hash);
	}
}

