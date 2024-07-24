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
        let result = {
          roverStatus: {
            position: this.position,
            mode: this.mode,
            generatorWatts: this.generatorWatts,
          },
          completed: true,
        };
        response.results.push(result);
      } else if (message.commands[i].commandType === "MODE_CHANGE") {
        this.mode = message.commands[i].value;
        let result = {
          roverStatus: {
            position: this.position,
            mode: message.commands[i].value,
            generatorWatts: this.generatorWatts,
          },
          completed: true,
        };
        response.results.push(result);
      } else if (
        message.commands[i].commandType === "MOVE" &&
        this.mode === "LOW_POWER"
      ) {
        let result = {
          roverStatus: {
            position: this.position,
            mode: this.mode,
            generatorWatts: this.generatorWatts,
          },
          completed: false,
        };
        response.results.push(result);
      } else if (
        message.commands[i].commandType === "MOVE" &&
        this.mode != "LOW_POWER"
      ) {
        this.position = message.commands[i].value;
        let result = {
          roverStatus: {
            position: message.commands[i].value,
            mode: this.mode,
            generatorWatts: this.generatorWatts,
          },
          completed: true,
        };
        response.results.push(result);
      }
    }
    return response;
  }
}

module.exports = Rover;
