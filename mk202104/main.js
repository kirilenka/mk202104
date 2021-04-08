'use strict';

const arenas = document.querySelector('.arenas');

class Player {
  constructor(name, hp, img = null, weapon = []) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
  }

  attack() {
    console.log(this.name + ' Fight...');
  }
  getPlayerDiv(className) {
    return `
    <div class="${className}">
    <div class="progressbar">
        <div class="life" style="width: ${this.hp}%"></div>
        <div class="name">${this.name}</div>
    </div>
    <div class="character">
        <img src="/assets/img/${this.name.toLowerCase()}.gif" />
    </div>
  </div>
    `;
  }

};

const scorpion = new Player('SCORPION', 50, null, ['ice']);
const subZero = new Player('SUBZERO', 80, null, ['lasso']);
scorpion.attack();
subZero.attack();

function createPlayer(className, player) {
  const playerDiv = document.createElement('DIV');
  arenas.appendChild(playerDiv);
  playerDiv.outerHTML = player.getPlayerDiv(className, player);
}

createPlayer('player1', scorpion);
createPlayer('player2', subZero);