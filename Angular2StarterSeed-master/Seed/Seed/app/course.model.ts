export class Course{
    constructor(
        public name:string,
        public duration:number,
        public location:string,
        public imageURL:string,
        public rating:number,
        public price:number,
        public date?:string
    ){}
}