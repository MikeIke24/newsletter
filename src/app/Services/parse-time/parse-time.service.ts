import { Injectable } from '@angular/core';

@Injectable()
export class ParseTimeService {
  constructor() { }

  getTime(time: number) {
    let date = new Date(time * 1000);
    return date.toString().slice(0, 11);
  }
}
