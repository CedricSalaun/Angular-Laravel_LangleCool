export class Users {
    constructor(
        public id: number,
        public lastname: string,
        public firstname: string,
        public email: string,
        public password: string,
        public phone: string,
        public address?: string,
    ){}
}
