export class Battle {
  constructor(houseArray, percentage) {
    this.firstHouse = houseArray[0].name;
    this.secondHouse = houseArray[1].name;
    this.landAtPlay = [
      (houseArray[0].land * percentage),
      (houseArray[1].land * percentage)
    ];
    this.armies = [
      (houseArray[0].army * percentage),
      (houseArray[1].army * percentage)
    ];
  }
}
