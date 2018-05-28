import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:`[poststyle]` //here template & templateurl is present coz it directive 
})

export class PostStyleDirective implements OnInit{ // Here Onit is Interface to call at directive intialiazation.
    constructor(private refElement:ElementRef){
        // this.refElement.nativeElement.style.backgroundColor = "aliceblue"
        // this.refElement.nativeElement.style.border = "2px solid red"
        // this.refElement.nativeElement.style.boarderRadius = "10px"
        // this.refElement.nativeElement.style.padding = "20px"
        // this.refElement.nativeElement.style.margin = "20px"
    }

    ngOnInit(){
        this.refElement.nativeElement.style.backgroundColor = "aliceblue"
        this.refElement.nativeElement.style.border = "2px solid red"
        this.refElement.nativeElement.style.boarderRadius = "10px"
        this.refElement.nativeElement.style.padding = "20px"
        this.refElement.nativeElement.style.margin = "20px"
    }

    @HostListener('mouseenter') OnMyMouseEnter()
    {
      this.refElement.nativeElement.style.backgroundColor = "orange"   
    }

    @HostListener('mouseleave') OnMyMouseLeave()
    {
      this.refElement.nativeElement.style.backgroundColor = "aliceblue"   
    }

}