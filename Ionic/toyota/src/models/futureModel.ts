export class FutureModel {
    id: number;
    name: string;
    description: string;
    image: string;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}