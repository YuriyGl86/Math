import Character from './character';

export default class Magician extends Character {
  constructor(name, attack = 10) {
    super(name, attack, 'Magician');
  }
}

export const magician = new Magician('mag');
