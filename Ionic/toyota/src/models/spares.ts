export class Spare {
    id: number;
    category: string;
    name: string;
    reference: string;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}