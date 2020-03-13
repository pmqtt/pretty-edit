import { ICommand } from "./command.interface";
import {IRandom} from '../util/random.interface';

export class RandomNumberCommand implements ICommand{
    
    public constructor(private radomizer : IRandom,private beginInt =-1, private endInt = -1){

    }


    execute(): string {    
        if(this.beginInt === -1 && this.endInt === -1){
            let value = Math.random();
            return value.toString();
        }else{
            return this.radomizer.generateRandInteger(this.beginInt,this.endInt).toString();
        }
      
    }
}