class Rover {
  constructor(position, mode, generatorWatts) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    let response = { message: message.name, results: [] };
    //let results = []
    return response;
  }
}

// let commands = [
//   new Command("MODE_CHANGE", "LOW_POWER"),
//   new Command("STATUS_CHECK"),
// ];
// let message = new Message("Test message with two commands", commands);
// let rover = new Rover(98382); // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);

//console.log(response.name);

module.exports = Rover;
