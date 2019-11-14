export class Game {
  constructor() {
    this.houses = [];
    this.isOver = false;
    this.isReady= false;
    this.houseCount = 0;
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



}
