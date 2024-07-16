class Rover {
  constructor(position, mode, generatorWatts) {
    this.position = position;
    // if (!name) {
    //   throw Error("Name required.");
    // }
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
}

//recieveMessage(message);
module.exports = Rover;
