import { ICommand } from "./command.interface";
import * as vscode from 'vscode';
import { randomBytes } from "crypto";


export class RandomNumberCommand implements ICommand{
    
    public constructor(private editor : vscode.TextEditor, private beginInt =-1, private endInt = -1){

    }

    private  getRandomNumberInIntervall() : number {
        let min = Math.ceil(this.beginInt);
        let max = Math.floor(this.endInt);
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    execute(): void {
        this.editor.edit(editBuilder =>{
            let selections = this.editor.selections;
            
            for (let index = 0; index < selections.length; index++) {
                const selection = selections[index];
                let value = Math.random();
                if(this.beginInt === -1 && this.endInt === -1){
                    editBuilder.insert(selection.active,value.toString());
                }else{
                    editBuilder.insert(selection.active,this.getRandomNumberInIntervall().toString());
                }
                
            }
        });
    }
}