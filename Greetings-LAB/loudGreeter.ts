import { Greeter } from "./greeter";

class LoudGreeter extends Greeter {
  private extra: string = "!!"

  constructor(greeting:string) {
    super(greeting);
    
  }
  addVolume(): void {
    this.extra += '!';
  }

  greet(name:string){
    return `${this.greeting}, ${name}${this.extra}`;
  }
}
export { LoudGreeter };
