import {Component, Input} from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

@Component({
  selector: 'loading-indicator',
  template: `
    <div class="dial-container container-1">
      <div class="wedge" [style.transform]="getTransform1()"></div>
    </div>
    <div class="dial-container container-2">
      <div class="wedge" [style.transform]="getTransform2()"></div>
    </div>
  `,
  styles: [require('./views/loading-indicator.css').toString()]
})
export class LoadingIndicator {
  @Input() progress = 0;
  
  constructor(private sanitizer:DomSanitizationService){};
  
  getTransform1() {
    const rotation = Math.min(-180 + (this.progress / 50) * 180, 0);
    return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${rotation}deg)`);
  }
  getTransform2() {
    const rotation = Math.max(-180, Math.min(-180 + ((this.progress - 50) / 50) * 180, 0));
    return this.sanitizer.bypassSecurityTrustStyle(`rotateZ(${rotation}deg)`);
  }
}
