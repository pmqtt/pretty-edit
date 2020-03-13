import * as vscode from 'vscode';
import { ICommand } from '../command/command.interface';


export function executeOnEditor(editor : vscode.TextEditor,command : ICommand) : void {
    editor.edit(editBuilder =>{
        let selections = editor.selections;   
        for (let index = 0; index < selections.length; index++) {
            const selection = selections[index];
            editBuilder.insert(selection.active,command.execute());
        }
    });
}