declare let require: any;

export class Interceptor {
  
  public client: any;
  private emitter:any;
  
  constructor(_emitter:any) {
    this.emitter = _emitter;
    this.stream();
  }
  
  private stream() {
    //Stream some server
    //
    //
    this.emitter.notify('Hello');
  }
  
}
