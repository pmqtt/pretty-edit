import * as vscode from 'vscode';
import { ICommand } from './command/command.interface';
import {EmptyCommand} from './command/command.empty';
import {NumberIndexingCommand} from './command/command.number.indexing';
import {RandomNumberCommand} from './command/command.number.random';
import { executeOnEditor } from './gui/editor.inserter';
import { Randomizer } from './util/randomizer';
import { AlphaCommand } from './command/command.alpha';

export abstract class CommandBuilder{
    public constructor(protected cmd : string){
        
    }
    
    private testIsDigit(digit : string) : boolean{
        if(parseInt(digit.trim()) !== NaN) {
            return true;
        }
        return false;
    }

    private testIsLetter(alpha : string) : boolean{
        let ch : string = alpha.trim();
        return ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
    }

    public abstract build(editor : vscode.TextEditor) : void;
    


    public chooseCommand(command: string[]):ICommand{
        if(command.length > 0){
            for(let i = 0; i < command.length; ++i){
                command[i] = command[i].trim();
            }
            if(this.testIsDigit(command[0])){
                if( command.length > 1 && this.testIsDigit(command[1])){
                return new NumberIndexingCommand(+command[0],+command[1]);
                }
                return new NumberIndexingCommand(+command[0],1);
            }else if(command[0] === 'rand'){
                if( command.length > 2 && this.testIsDigit(command[1]) && this.testIsDigit(command[2])){
                    return new RandomNumberCommand(new Randomizer(),+command[1],+command[2]);
                }
                return new RandomNumberCommand(new Randomizer());
            }else if (command[0] === 'alpha'){
                if( command.length > 1 && this.testIsLetter(command[1])){
                    return new AlphaCommand(command[1]);
                }
            }
        }
        return new EmptyCommand("");
    }
}