export class Game {
  constructor() {
    this.houses = [];
    this.isOver = false;
    this.isReady= false;
    this.houseCount = 0;
    this.houseTurn = 0;
  }

  addHouse(house) {
    house.id = this.houseCount;
    this.houseCount++;
    this.houses.push(house);
    if (this.houses.length > 2) this.isReady = true;
  }

  calculateStartingLand() {
    const numOfHouses = this.houses.length;
    const startLand = parseInt(Math.floor(100/numOfHouses));
    this.houses.forEach(house => house.land = startLand);
    }

  reset() {
    this.houses = [];
    this.isOver = false;
    this.isReady= false;
    this.houseCount = 0;
  }

  checkForWinner() {
    const numHouses = this.houses.length;
    this.houses.forEach((house, i) => {
      if (house.land >= 95) {
        this.isOver = true;
        this.winner = house;
        return true;
      }
    });
    return this.isOver;
  }

  changeTurn() {
    this.houseTurn++;
    if (this.houseTurn === this.houses.length) this.houseTurn = 0;
  }

  takeTurn(chooseBattle, battleArray, percentage) {
    if (chooseBattle) {
      const newBattle = new Battle(battleArray, percentage);
      const battleResults = newBattle.getWinner();
      battleResults.forEach(house => {
        if (house.army < 1) {
          console.log(`${house.name} is DEAD!!!!`);
        }
      });
      this.changeTurn();
    } else {
      this.changeTurn();
    }
    this.checkForWinner();
  }


}
