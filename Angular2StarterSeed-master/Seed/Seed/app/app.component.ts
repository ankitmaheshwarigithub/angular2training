import { Component } from '@angular/core';
import { Course } from './course.model';

//Practice1: Passing Object from App Component to  Course Component
// @Component({
//   selector: 'my-app',
//   template: `    
//   <course [details]="course1"></course> 
//   <course [details]="course2"></course>
//   <course></course>
//   `,
// })
// export class AppComponent  { 
//   course1:any= {name:"React",duration:"3hrs"};
//   course2:any= {name:"Node",duration:"3hrs"}; 
// }

//Practice2: Passing Object by iterating loop
// @Component({
//   selector: 'my-app',
//   template: `    
//   <div>
//   <p *ngFor="let c of courses">
//     <course [details]="c"></course>
//   </p>
//   <course></course>
//   </div>
//   `,
// })
// export class AppComponent  { 
//   courses:any= [{name:"React",duration:"3hrs"},{name:"Node",duration:"3hrs"}]; 
// }

//Practice3: Passing model Object by iterating loop
// @Component({
//   selector: 'my-app',
//   template: `    
//   <div>
//   <p *ngFor="let c of courses">
//     <course [details]="c"></course>
//   </p>
//   <course></course>
//   </div>
//   `,
// })
// export class AppComponent  { 
//   courses:Course[] = [
//     new Course("Angular","3days"),
//     new Course("React","3days"),
//     new Course("Node","3days"),
//     new Course("Cloud","3days"),
//   ]; 
// }

// //Practice4: Bindings(One way Binding)
// @Component({
//   selector: 'my-app',
//   template: `    
//   <div>
//   <h1>{{heading}}</h1>
//   <input type="button" value="Change Heading!" (click)="ChangeHandler()">
//   <p *ngFor="let c of courses">
//     <course [details]="c"></course>
//   </p>
//   <course></course>
//   </div>
//   `,
// })
// export class AppComponent  { 
//   courses:Course[] = [
//     new Course("Angular","3days"),
//     new Course("React","3days"),
//     new Course("Node","3days"),
//     new Course("Cloud","3days"),
//   ];
//   heading:string="List of courses";
//   ChangeHandler(){
//   this.heading = "Dynamic Heading!"
//   }
// }

//Practice5: Bindings(One way Binding by using Property binding.)
// @Component({
//   selector: 'my-app',
//   template: `    
//   <div>
//   <h1>{{heading}}</h1>
//   <input type="text" [value]="heading">
//   <p *ngFor="let c of courses">
//     <course [details]="c"></course>
//   </p>
//   <course></course>
//   </div>
//   `,
// })
// export class AppComponent  { 
//   courses:Course[] = [
//     new Course("Angular","3days"),
//     new Course("React","3days"),
//     new Course("Node","3days"),
//     new Course("Cloud","3days"),
//   ];
//   heading:string="List of courses";
// }

// //Practice6: Bindings(Two way Binding using Event Handling Mechanism)
// @Component({
//   selector: 'my-app',
//   template: `    
//   <div>
//   <h1>{{heading}}</h1>
//   <input type="text" [value]="heading" (input)="ChangeHeadingTwoWay($event)">
//   <p *ngFor="let c of courses">
//     <course [details]="c"></course>
//   </p>
//   <course></course>
//   </div>
//   `,
// })
// export class AppComponent  { 
//   courses:Course[] = [
//     new Course("Angular","3days"),
//     new Course("React","3days"),
//     new Course("Node","3days"),
//     new Course("Cloud","3days"),
//   ];
//   heading:string="List of courses";
//   ChangeHeadingTwoWay(evt:any){
//       this.heading = evt.target.value; //target is a DOM object
//       }
// }

// //Practice7: Bindings(Two way Binding using ngModel)
// @Component({
//   selector: 'my-app',
//   template: `    
//   <div>
//   <h1>{{heading}}</h1>
//   <input type="text" [(ngModel)]="heading">
//   <p *ngFor="let c of courses">
//     <course [details]="c"></course>
//   </p>
//   <course></course>
//   </div>
//   `,
// })
// export class AppComponent  { 
//   courses:Course[] = [
//     new Course("Angular","3days"),
//     new Course("React","3days"),
//     new Course("Node","3days"),
//     new Course("Cloud","3days"),
//   ];
//   heading:string="List of courses";
// }

// //Practice8: Use of template URL instead inline template
// @Component({
//   selector: 'my-app',
//   templateUrl: `./app/app.component.html`,
// })
// export class AppComponent  { 
//   courses:Course[] = [
//     new Course("Angular","3days"),
//     new Course("React","3days"),
//     new Course("Node","3days"),
//     new Course("Cloud","3days"),
//   ];
//   heading:string="List of courses";
// }

//Practice9: Use of CSS class and Use of Produc Component
// @Component({
//   selector: 'my-app',
//   // templateUrl: `./app/app.component.html`,
//  template:`<product></product>`
//  template:`<posts></posts>`
// })
// export class AppComponent  { 
//   isStyled:boolean=true;
//   courses:Course[] = [
//     new Course("Node JS",3,"Hyderabad","data:image/png;base64,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"
//     ,7,5000,"25/06/2018"),
//     new Course("React",5,"Noida","data:image/png;base64,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"
//     ,8,7000),
//     new Course("Cloud",7, "Pune","data:image/png;base64,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"
//     ,9,10000),
//   ];
//   heading:string="List of courses";
//}

//Practice10: Use of Post Component
// @Component({
//   selector: 'my-app',
//   template:`<posts></posts>`
// })
// export class AppComponent  { 

// }

//Practice10: Call Routed Component in Router Outlet
@Component({
  selector: 'my-app',
  template:`
  <!-- <a href="/posts">Posts</a> || <a href="/products">Products</a> It is refresheing the page-->
  <a routerLink="/posts">Posts</a> || <a routerLink="/products">Products</a>
  <router-outlet></router-outlet> <!--for multiple outlet need to define router with name-->
  `
})
export class AppComponent  { 

}