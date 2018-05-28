import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { CourseComponent } from './course.compnent';
import { DurationPipe } from './duration.pipe';
import { ProductComponent } from './product.component';
import { PostComponent } from './post.component';
import { postdetail } from './postdetail.componet';
import { PostStyleDirective } from './postStyle.directive';

//Define Routes with URL and Component mapping.
const routes:Routes = [
{path:`products`,component:ProductComponent},
{path:`posts`, component:PostComponent},
{path:`posts/:id`, component:postdetail},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, CourseComponent, DurationPipe, 
    ProductComponent, PostComponent, postdetail, PostStyleDirective], //Declare Components, pipes, directives here
    bootstrap:    [ AppComponent ],
    providers: []
})
export class AppModule { }
