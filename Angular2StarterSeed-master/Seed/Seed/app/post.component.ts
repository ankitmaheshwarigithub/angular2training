import { Component } from "@angular/core";
import { PostService } from "./post.service";

@Component(
    {
        selector:`posts`,
        template:`
        <!--{{allPost|json}}-->
        <ul>
        <li *ngFor="let post of allPost" poststyle> <!--poststyle is custom directive-->
        <a routerLink="/posts/{{post.id}}"> {{post["title"]}} </a>
        <a [routerLink]="['/posts',post.id]"> {{post["title"]}} </a>
        </li>
        </ul>
        `,
        providers:[PostService],
        // styles:[
        //     PostStyle{
        //         border: 2px solid red;
        //     }
        // ]
    }
)

export class PostComponent{
allPost:any = [];

    constructor(public serviceobj:PostService){
    //Example of callback
    // this.serviceobj.getPosts((theResponseFromService:any)=>
    // {
    //    //console.log(theResponseFromService); 
    //    this.allPost = theResponseFromService;
    // });

    //Example of promise
    let aPromise = this.serviceobj.getPost();
    aPromise.then(
        (theResponse)=>{ // For Success
            this.allPost = theResponse.json();
        }, 
        (theError)=>{ //For Error
         console.log(theError);
        }  
    );
 }
}
