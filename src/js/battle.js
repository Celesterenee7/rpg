export class Battle {
  constructor(houseArray, percentage) {
    this.houseArray = houseArray;
    this.landAtPlay = [
      (houseArray[0].land * percentage),
      (houseArray[1].land * percentage)
    ];
    this.armies = [
      (houseArray[0].army * percentage),
      (houseArray[1].army * percentage)
    ];
  }

  getWinner() {
    const offset = (this.armies[0] - this.armies[1])/10;
    const randomizedResult = Math.floor(Math.random()*10) + offset;
    if (randomizedResult >=5) {
      this.winner = 0;
      this.loser = 1;
    } else {
      this.winner = 1;
      this.loser = 0;
    }
    this.handleCasualties();
    const loserLand = this.landAtPlay[this.loser];
    this.houseArray[this.winner].land += loserLand;
    this.houseArray[this.loser].land -= loserLand;
    return this.houseArray;
  }

  handleCasualties() {
    const loserCasPercent = (Math.floor(Math.random() * 7) + 4)/10;
    const loserCas = Math.floor(this.armies[this.loser] * loserCasPercent);
    this.houseArray[this.loser].army -= loserCas;
    const converted = Math.floor(loserCas * Math.random());
    const winnerCasPercent = (Math.floor(Math.random() * 4) + 1)/10;
    const winnerCas = Math.floor(this.armies[this.winner] * winnerCasPercent) - converted;
    this.houseArray[this.winner].army -= winnerCas;
  }

}
