import { ICommand } from "./command.interface";



export class EmptyCommand implements ICommand{
    
    public constructor(private cmd :string){

    }

    execute(): string {
        return '';
    }
}