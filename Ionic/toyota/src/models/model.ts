export class Model {
    id: number;
    name: string;
    power: number;
    fuel: string;
    price: number;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}