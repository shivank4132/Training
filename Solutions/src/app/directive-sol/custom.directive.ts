import { Directive, ElementRef, Renderer, HostListener, HostBinding } from "@angular/core";


@Directive({
    selector: '[textChange]'
})

export class TextChangeDirective {
    constructor(private el:ElementRef){
       el.nativeElement.innerText='Hello, I am Custom Directive.';
  
    }
/*     this.textChanges('Hello, I am Custom Directive');


    textChanges(text:string){
        this.render.setText(this.el.nativeElement,'innerT');
    } */

    @HostBinding('style.border') border:string;

    @HostListener('mouseover') func(){
        this.el.nativeElement.innerText='Custom Directive message changed due to HostListener and border is set using HostBinding. ';
        this.border='2px dotted red';
    }
}