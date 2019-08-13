import { ILocation } from "../types/CrashClass";

class ElementClass {
  constructor(public location: ILocation, public img: Element) {
    this.location = location;
    this.img = img;
  }
}

export default ElementClass;
