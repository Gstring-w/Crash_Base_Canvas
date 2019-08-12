import { Location } from "../types/CrashClass";

/**
 * @param @Object location {x,y}
 */
class CrashClass {
  public location: Location;
  constructor(location: Location) {
    this.location = location;
  }
}

export default CrashClass;
