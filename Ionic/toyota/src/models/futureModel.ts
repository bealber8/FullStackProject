export class FutureModel {
    id: number;
    name: string;
    description: string;
    image: string;
    cardealership_id: number;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}