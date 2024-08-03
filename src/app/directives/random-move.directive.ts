import {Directive, ElementRef, inject, OnInit} from '@angular/core';

@Directive({
  selector: '[appRandomMove]',
  standalone: true
})
export class RandomMoveDirective implements OnInit {

  element = inject(ElementRef);

  ngOnInit() {
    // add class after random time
    setTimeout(() => {
      this.element.nativeElement.classList.add('random-object');
    }, this.randomTime());
  }

  randomTime() {
    return Math.floor(Math.random() * 5000);
  }


}
