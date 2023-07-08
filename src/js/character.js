// import Math from "core-js/fn/math";
/* eslint no-underscore-dangle: 0 */

export default class Character {
  constructor(name, attack, type) {
    this.name = name;
    this._attack = attack;
    this.type = type;
    this._distance = 1;
    this._stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set distance(value) {
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  get attack() {
    let attackModifier = (11 - this.distance) / 10;
    if (this.stoned) {
      attackModifier -= (Math.log2(this.distance) * 5) / 100;
    }
    return this._attack * attackModifier;
  }

  set attack(value) {
    this._attack = value;
  }
}
