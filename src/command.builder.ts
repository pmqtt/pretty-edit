import * as vscode from 'vscode';
import { ICommand } from './command.interface';
import {EmptyCommand} from './command.empty';
import {NumberIndexingCommand} from './command.number.indexing';
import {RandomNumberCommand} from './command.number.random';

export class CommandBuilder{
    public constructor(private cmd : string){
        
    }
    
    private testIsDigit(digit : string) : boolean{
        if(parseInt(digit)) {
            return true;
        }
        return false;
    }

    public build(editor : vscode.TextEditor) : ICommand{
        const command : string [] = this.cmd?.split(";");
        if(command){

            if(this.testIsDigit(command[0])){
                if( command.length > 1 && this.testIsDigit(command[1])){
                    return new NumberIndexingCommand(editor,+command[0],+command[1]);
                }
                return new NumberIndexingCommand(editor,+command[0],1);
            }else if(command[0] === 'rand'){
                if( command.length > 2 && this.testIsDigit(command[1]) && this.testIsDigit(command[2])){
                    return new RandomNumberCommand(editor,+command[1],+command[2]);
                }
                return new RandomNumberCommand(editor);
            }
        }

        return new EmptyCommand(editor," ");
        
    }
}