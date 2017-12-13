export class Adverts {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public url_photo: string,
        public is_active: boolean,
        public created_at: string,
        public updated_at: string,
    ){}
}
