import {ICommand} from './command.interface';


export class AlphaCommand implements ICommand{
    
    private words : string [] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    private index : number;
    
    public constructor(private alpha : string){
        this.index = this.words.indexOf(this.alpha);
    }




    execute() : string{
        let result : string = this.words[this.index];
        this.index++;
        if(this.index >= this.words.length){
            this.index = 0;
        }
        return result;
    }

}