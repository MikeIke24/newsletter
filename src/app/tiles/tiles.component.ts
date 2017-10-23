import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit {
  @Input('location') location: string;
  tileOpen = false;
  allowExpand = true;
  el;
  btn;
  btnStyle;
  constructor(elementRef: ElementRef, renderer: Renderer2) { }

  ngOnInit() {
    this.btn = document.getElementById('shrink-button');
    this.btnStyle = this.btn.style;
  }

  expand(event) {
    if (this.allowExpand) {
    this.allowExpand = false;
    this.el = event.path[0].style;
    this.el.zIndex = '2';
    this.el.width = '100%';
    this.el.height = '100vh';
    this.el.top = '0%';
    this.el.left = '0%';
    this.tileOpen = true;
    this.btnStyle.right = '2rem';
    }
  }
  shrink() {
    this.el.width = '';
    this.el.height = '';
    this.el.top = '';
    this.el.left = '';
    this.btnStyle.right = '-4rem';
    setTimeout(() => {
      this.el.zIndex = '0';
      this.allowExpand = true;
    }, 500);
  }
  shrinkButtonLogic() {
    let el = document.getElementById('button');
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
      this.shrink();
    }
  }
}
