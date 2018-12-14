export class Supplier {
    id: number;
    nif: string;
    name: string;
    direction: string;
    telephone: string;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}