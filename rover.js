class Rover {
  constructor(position, mode, generatorWatts) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: [],
    };
    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i].commandType === "STATUS_CHECK") {
        let roverStatus = {
          position: this.position,
          mode: this.mode,
          generatorWatts: this.generatorWatts,
        };
        response.results.push(roverStatus);
      } else if (message.commands[i].commandType === "MODE_CHANGE") {
        let roverStatus = {
          position: this.position,
          mode: message.commands[i].value,
          generatorWatts: this.generatorWatts,
        };
        response.results.push(roverStatus);
      } else if (
        message.commands[i].commandType === "MOVE" &&
        this.mode != "LOW_POWER"
      ) {
        let roverStatus = {
          position: message.commands[i].value,
          mode: this.mode,
          generatorWatts: this.generatorWatts,
        };
        response.results.push(roverStatus);
      }
    }

    return response;
  }
}

module.exports = Rover;
