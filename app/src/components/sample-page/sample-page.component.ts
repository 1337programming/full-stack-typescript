import {Component} from '@angular/core';
import 'rxjs/add/operator/bufferTime';
let io = require('socket.io-client');

@Component({
  selector: 'sample-page',
  template: `
    <div>
        <p>{{hello}}</p>
    </div>
  `
})
export class SamplePage {
  
  public hello:string;
  constructor() {
    this.hello = 'Hello World';
  }

}
