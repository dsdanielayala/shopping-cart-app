export class createUserDto{
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly active: boolean;
    readonly address: string;
    readonly phone: string;
    readonly createdAt: Date;
}