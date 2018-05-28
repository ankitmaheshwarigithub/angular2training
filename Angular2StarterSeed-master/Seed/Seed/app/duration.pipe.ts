import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"duration"
})
export class DurationPipe implements PipeTransform{
    transform(theInput:number, theArgs:string){
        return theInput + " " + theArgs;
    }
}