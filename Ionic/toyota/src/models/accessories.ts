export class Accessory {
    id: number;
    category: string;
    name: string;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}