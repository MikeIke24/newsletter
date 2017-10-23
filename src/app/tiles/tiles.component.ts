import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit {
  @Input('location') location: string;
  showTileShrinkBtn = false;
  tileOpen = false;
  el;
  constructor(elementRef: ElementRef, renderer: Renderer2) { }

  ngOnInit() {
  }

  expand(event) {
    this.tileOpen = true;
    this.showTileShrinkBtn = true;
    this.el = event.path[0].style;
    this.el.zIndex = '2';
    this.el.width = '100%';
    this.el.height = '100%';
    this.el.top = '0%';
    this.el.left = '0%';
  }
  shrink() {
    this.el.width = '';
    this.el.height = '';
    this.el.top = '';
    this.el.left = '';
    setTimeout(() => {
      this.el.zIndex = '0';
    }, 500);
  }
  shrinkButtonLogic() {
    /*
    if (!this.tileOpen) {
      // remove event listener
    }
    else {
      let simple = this.renderer.listen(elementRef.nativeElement, 'click', (evt) => {
        console.log('Clicking the button', evt);
      });
    }
      */
    if (this.tileOpen) {
      this.showTileShrinkBtn = false;
      this.shrink();
    }
  }
}
