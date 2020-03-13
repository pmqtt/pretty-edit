import { ICommand } from "./command.interface";



export class NumberIndexingCommand implements ICommand{
    
    public constructor(private startIndex : number, private increment : number){

    }

    execute(): string {
        let result : string = this.startIndex.toString();
        this.startIndex += this.increment;
        return result;
        
    }
}