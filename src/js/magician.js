import Character from './character';

export default class Magician extends Character {
  constructor(name, type = 'magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export const magician = new Magician('mag');
