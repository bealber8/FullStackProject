export class Accessory {
    id: number;
    category: string;
    name: string;
    suppliers: number;
    cardealership_id: number;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}