import { ILocation } from "../types/CrashClass";

class Canvas {
  constructor(private location: ILocation, private img: Element) {
    this.location = location;
    this.img = img;
  }
  private show(): void {}
}
