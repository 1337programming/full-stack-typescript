declare let require: any;

let Rx = require('rx');

let hasOwnProp = {}.hasOwnProperty;

export class StreamEmitter {
  
  public subjects: any;
  
  constructor() {
    this.subjects = {};
  }
  
  public emit(name, data) {
    var fnName = StreamEmitter.createName(name);
    this.subjects[fnName] || (this.subjects[fnName] = new Rx.Subject());
    this.subjects[fnName].onNext(data);
  }
  
  public listen(name, handler) {
    var fnName = StreamEmitter.createName(name);
    this.subjects[fnName] || (this.subjects[fnName] = new Rx.Subject());
    return this.subjects[fnName].subscribe(handler);
  }
  
  public dispose() {
    var subjects = this.subjects;
    for (var prop in subjects) {
      if (hasOwnProp.call(subjects, prop)) {
        subjects[prop].dispose();
      }
    }
    
    this.subjects = {};
  }
  
  public notify(message): void {
    this.emit('Message', message);
  }
  
  private static createName(name) {
    return `$${name}`;
  }
}
