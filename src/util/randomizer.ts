import {IRandom} from './random.interface';

export class Randomizer implements IRandom{
    public constructor(){}

    generateRandInteger(beginInterval : number, endInterval : number ) : number{
        let min = Math.ceil(beginInterval);
        let max = Math.floor(endInterval);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generateRandFloat(beginInterval : number, endInterval : number ) : number{
        return 0.0;
    }
}