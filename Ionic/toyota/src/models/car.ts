export class Cardealership {
    id: number;
    direction: string;
    telephone: string;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}