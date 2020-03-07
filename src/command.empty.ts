import { ICommand } from "./command.interface";
import * as vscode from 'vscode';


export class EmptyCommand implements ICommand{
    
    public constructor(private editor : vscode.TextEditor,private cmd :string){

    }

    execute(): void {
        
    }
}