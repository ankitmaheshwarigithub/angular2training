import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:`product`,
    template:`<h1>Post Detail for {{thePostId}}</h1>`
})

export class postdetail{
    thePostId:number;
    constructor(currRoute:ActivatedRoute){
    
        currRoute.params.subscribe( //
            p=>{
                this.thePostId = p["id"] //fetch the value from URL
            }
        )
        
    }
}
