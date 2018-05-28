import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';

@Injectable() //need to mark to use any other service in this service like HTTP service used in this service.
export class PostService{
    constructor(public httpObj:Http){

    }
    //Example of callback
    // getPosts(callBackFunc:any){
    //     //Shoud get all posts from server using the URL
    //     this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    //         .subscribe(function(response){
    //             callBackFunc(response.json());
    //         });
    // }

    //Example of Promise
    getPost(){
        return this.httpObj.get("https://jsonplaceholder.typicode.com/posts").toPromise();
    }
}