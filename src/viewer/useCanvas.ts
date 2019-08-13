import { ILocation } from "../types/CrashClass";
import { move } from "../config/index";
export class Canvas {
  constructor(private location: ILocation, private img: Element) {
    this.location = location;
    this.img = img;
  }
  private show(): void {}
}

export class Dom {
  private dom: Element;
  constructor(private _location: ILocation, private img: Element) {
    this._location = _location;
    this.img = img;
    this.dom = this.createDom();
  }

  private createDom(): Element {
    const dom = this.img;
    return dom;
  }

  public show(wrapper?: Element): void {
    wrapper ? wrapper.append(this.dom) : document.body.append(this.dom);
  }

  set location(loc: ILocation) {
    this._location = loc;

    if (
      loc.x >= 0 &&
      loc.x <= move.width * 15 &&
      loc.y > 0 &&
      loc.y <= move.height * 20
    ) {
      this.dom.style.left = loc.x + "px";
      this.dom.style.top = loc.y + "px";
      this.dom.style.transform = `rotate(${loc.rotate}deg)`;
      console.log(loc.x);
    }
  }

  get location(): ILocation {
    return this._location;
  }
}
