import { ILocation } from "../types/CrashClass";

/**
 * @param @Object location {x,y}
 */
class CrashClass {
  public location: ILocation;
  constructor(location: ILocation) {
    this.location = location;
  }
}

export default CrashClass;
