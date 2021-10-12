import {CommandBuilder} from './command.builder';
import { ICommand } from './command/command.interface';
import { executeOnEditor } from './gui/editor.inserter';
import { EmptyCommand } from './command/command.empty';

export class CursorCommandBuilder extends CommandBuilder{
    public constructor(cmd : string ) {
        super(cmd);
    }
    
    public build(editor: import("vscode").TextEditor): void {
        let call : ICommand = new EmptyCommand("");
        const command : string [] = this.cmd?.split(";");
        if(command){
            executeOnEditor(editor,this.chooseCommand(command));
        }
    }
}