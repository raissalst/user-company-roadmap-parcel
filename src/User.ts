import faker from 'faker';
import { Mappable } from './CustomMap';

//with implements we ask TS to help us make sure that User has all the properties specificed by Mappable
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name ${this.name}`;
    }

    color: string = 'red';
}