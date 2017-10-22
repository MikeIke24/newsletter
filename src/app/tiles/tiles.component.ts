import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit {
  @Input('location') location: string;
  width = '100';
  height = '100';
  constructor() { }

  ngOnInit() {
  }

  expand(event) {
    let el = document.getElementById('grid-container');
    el.style.setProperty('grid-template-areas', `two`);
    let tn = document.getElementById('tech-news');
    tn.style.height = '85vh';
    tn.style.width = '100vw';
   // el.style.setProperty('grid-template-rows', `1fr`);
    //el.style.setProperty('grid-template-columns', `1fr`);
    /*
    console.log(event.path[0]);
    const height = (event.path[0].scrollHeight);
    const width = (event.path[0].scrollWidth);
    const el = event.path[0];
    const top = (el.offsetTop - el.scrollTop + el.clientTop - 1);
    const left = (el.offsetLeft - el.scrollLeft + el.clientLeft);
    let el2 = document.getElementById('active-box');
    console.log(el);
    //this.setStyles(top, left, height, width);
    el2.style.top = `${top}px`;
    el2.style.left = `${left}px`;
    el2.style.height = `${height+1}px`;
    el2.style.width = `${width}px`;
    el2.style.display = 'block';
*/
  }
}
