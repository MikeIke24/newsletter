import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit {
  @ViewChild('weather') child;
  @Input('location') location: string;
  transTime = '0.5s';
  tileOpen = false;
  allowExpand = true;
  allowHoverEffect = true;
  el;
  hovEl;
  btn;
  btnStyle;
  settingsBtn;
  settingsBtnStyle;
  header;
  windowHeight;
  constructor(elementRef: ElementRef, renderer: Renderer2) { }

  ngOnInit() {
    this.windowResize();
    this.btn = document.getElementById('shrink-button');
    this.btnStyle = this.btn.style;
    this.settingsBtn = document.getElementById('settings-button');
    this.settingsBtnStyle = this.settingsBtn.style;
    this.header = document.getElementById('header');
  }
  windowResize() {
    this.windowHeight = window.innerHeight;
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
      if (this.tileOpen) {
        this.el.height = `${this.windowHeight}px`;
      }
    });
  }
  tileHoverIn(event) {
    if (this.allowHoverEffect) {
      this.hovEl = event.path[0].style;
      this.hovEl.filter = 'brightness(0.7)';
    }
  }
  tileHoverOut(event) {
    if (this.allowHoverEffect) {
      this.hovEl.filter = '';
    }
  }
  expand(event) {
    console.log(event);
    if (this.allowExpand) {
    this.allowExpand = false;
    this.allowHoverEffect = false;
    this.hovEl.filter = '';
    if (event.path[0].classList[0] !== 'tile'){
      this.el = event.path[3].style;
    }
    else {
      this.el = event.path[0].style;
    }
    this.el.transition = `all ${this.transTime} cubic-bezier(.31,.26,.38,.95)`;
    this.el.zIndex = '2';
    this.el.width = '100%';
    this.el.height = `${this.windowHeight}px`;
    this.el.top = `-${this.header.offsetHeight}px`;
    this.el.left = '0%';
    this.btnStyle.right = '2rem';
    this.settingsBtnStyle.right = '2rem';
    setTimeout(() => {
      this.el.transition = '';
      this.tileOpen = true;
    }, 500);
    }
  }
  shrink() {
    this.el.transition = `all ${this.transTime} cubic-bezier(.31,.26,.38,.95)`;
    this.el.width = '';
    this.el.height = '';
    this.el.top = '';
    this.el.left = '';
    this.btnStyle.right = '-4rem';
    this.settingsBtnStyle.right = '-4rem';
    setTimeout(() => {
      this.el.zIndex = '0';
      this.el = {};
      this.allowExpand = true;
      this.allowHoverEffect = true;
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
