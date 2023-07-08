import Character from './character';

export default class Daemon extends Character {
  constructor(name, attack = 10) {
    super(name, attack, 'Daemon');
  }
}
