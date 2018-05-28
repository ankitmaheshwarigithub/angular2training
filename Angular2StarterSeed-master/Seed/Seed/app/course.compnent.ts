import { Component, Input} from "@angular/core";
import {Course} from './course.model';
//Practice1: Getting Object from App Component to Course Component
@Component({
    selector:`course`,
    template:`
    <h1>{{coursedetails.name | uppercase | lowercase}}</h1><br/>
    <img src="{{coursedetails.imageURL}}"><br/>
    <b>Duration </b>{{coursedetails.duration | duration:"Hours"}}<br/>
    <b>Location </b>{{coursedetails.location}}<br/>
    <b>Rating </b>{{coursedetails.rating}}<br/>
    <b>Price </b>{{coursedetails.price | currency:'INR':true}}<br/>
    <b>Date </b>{{coursedetails.date}}<br/>
    <b>RAW Data </b>{{coursedetails | json}}<br/>
    <hr>
    `
})
export class CourseComponent{ //Export make it available this class as Component, and need to declare with in @NgModule declaration.
@Input('details') coursedetails:any={name:"Angular",duration:3,location:"Hyd",imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDGlzz-m6pxcfDs-4gd6Gl0i0Xc8CsJu-gPLAvRfTmuyTabqq"
,rating:"8",price:"2000"};
}