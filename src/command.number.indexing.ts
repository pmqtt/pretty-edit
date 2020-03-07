import { ICommand } from "./command.interface";
import * as vscode from 'vscode';


export class NumberIndexingCommand implements ICommand{
    
    public constructor(private editor : vscode.TextEditor,private startIndex : number, private increment : number){

    }

    execute(): void {
        this.editor.edit(editBuilder =>{
            let selections = this.editor.selections;
            for (let index = 0; index < selections.length; index++) {
                const selection = selections[index];
                editBuilder.insert(selection.active,this.startIndex.toString());
                this.startIndex += this.increment;
                
            }
        });
    }
}