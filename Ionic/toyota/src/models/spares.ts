export class Spare {
    id: number;
    category: string;
    name: string;
    reference: string;
    suppliers: number;
    cardealership_id: number;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}